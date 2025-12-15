// src/main.js
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// ---------------------------
// Renderer / Scene / Camera
// ---------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.style.margin = "0";
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(4, 2.2, 6); // start from a nice angle

// ---------------------------
// OrbitControls (user camera)
// ---------------------------
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = true;
controls.enableZoom = true;
controls.rotateSpeed = 0.6;
controls.zoomSpeed = 1.0;
controls.panSpeed = 0.5;
// initial target (will lerp to car once loaded)
controls.target.set(0, 0.8, 0);
controls.update();

// detect user interaction so we pause auto-follow while dragging
let userInteracting = false;
controls.addEventListener("start", () => {
  userInteracting = true;
});
controls.addEventListener("end", () => {
  // small delay to avoid snapping on quick click
  setTimeout(() => {
    userInteracting = false;
  }, 80);
});

// ---------------------------
// Lighting
// ---------------------------
scene.add(new THREE.AmbientLight(0xffffff, 0.6));

const sun = new THREE.DirectionalLight(0xffffff, 1.1);
sun.position.set(5, 8, 7);
scene.add(sun);

scene.add(new THREE.GridHelper(20, 40, 0x999999, 0xdddddd)); // optional ground grid

// ---------------------------
// Load GLB -> apply neutral metallic-black materials
// ---------------------------
let playerCar = null;
const loader = new GLTFLoader();

loader.load(
  "/assets/car.glb",
  (gltf) => {
    const root = gltf.scene || gltf.scenes?.[0];
    if (!root) {
      console.error("GLTF has no scene");
      return;
    }

    // Replace materials per part name with clean neutral materials
    root.traverse((node) => {
      if (!node.isMesh) return;

      const matName = (node.material?.name || "").toLowerCase();

      // BODY -> metallic black
      if (/body|paint|shell|carpaint|exterior/.test(matName)) {
        node.material = new THREE.MeshStandardMaterial({
          color: 0x0d0d0d,
          metalness: 0.85,
          roughness: 0.25,
        });
      }
      // GLASS / WINDOWS -> tinted
      else if (/glass|window|windshield|mirror/.test(matName)) {
        node.material = new THREE.MeshStandardMaterial({
          color: 0x111111,
          metalness: 0.8,
          roughness: 0.05,
          transparent: true,
          opacity: 0.5,
        });
      }
      // TIRES -> matte black
      else if (/tire|tyre|wheel/.test(matName)) {
        node.material = new THREE.MeshStandardMaterial({
          color: 0x111111,
          metalness: 0.05,
          roughness: 0.9,
        });
      }
      // RIMS -> metallic silver
      else if (/rim|alloy|metal/.test(matName)) {
        node.material = new THREE.MeshStandardMaterial({
          color: 0xbfbfbf,
          metalness: 1.0,
          roughness: 0.2,
        });
      }
      // LIGHTS -> emissive for lamps
      else if (/lamp|light|headlight|taillight/.test(matName)) {
        node.material = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: /tail/.test(matName) ? 0xff0000 : 0xffffff,
          emissiveIntensity: 1.2,
          metalness: 0.2,
          roughness: 0.3,
        });
      }
      // fallback material
      else {
        node.material = new THREE.MeshStandardMaterial({
          color: 0x666666,
          metalness: 0.2,
          roughness: 0.6,
        });
      }

      node.material.needsUpdate = true;
      node.castShadow = true;
      node.receiveShadow = true;
    });

    // Remove embedded lights/cameras if any
    root.traverse((n) => {
      if (n.type === "Light" || n.type === "Camera") n.visible = false;
    });

    // Remove duplicate geometry groups (simple heuristic)
    const geoMap = new Map();
    root.traverse((n) => {
      if (n.isMesh && n.geometry) {
        const id = n.geometry.id;
        if (!geoMap.has(id)) geoMap.set(id, []);
        geoMap.get(id).push(n);
      }
    });
    geoMap.forEach((arr) => {
      if (arr.length > 1) {
        arr.sort((a, b) => Math.abs(a.getWorldPosition(new THREE.Vector3()).y) - Math.abs(b.getWorldPosition(new THREE.Vector3()).y));
        for (let i = 1; i < arr.length; i++) {
          arr[i].parent && arr[i].parent.remove(arr[i]);
        }
      }
    });

    // Auto-scale & place on ground
    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3()).length();
    const scale = size > 0 ? 3 / size : 1;
    root.scale.setScalar(scale);
    const box2 = new THREE.Box3().setFromObject(root);
    root.position.y = -box2.min.y;

    scene.add(root);
    playerCar = root;

    // Once car is loaded, set initial controls target so camera orbits the car
    const lookAtPos = new THREE.Vector3().copy(playerCar.position);
    lookAtPos.y += 0.8;
    controls.target.copy(lookAtPos);
    controls.update();
  },
  undefined,
  (err) => {
    console.error("GLB load error:", err);
  }
);

// ---------------------------
// WASD driving
// ---------------------------
const keys = {};
window.addEventListener("keydown", (e) => {
  keys[e.code] = true;
  // prevent scrolling with arrows/space
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) e.preventDefault();
});
window.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

const drive = {
  speed: 0,
  steer: 0,
  accel: 8,
  decel: 4,
  maxSpeed: 7,
  maxReverse: -3,
  maxSteer: 0.5,
  steerSpeed: 3,
};

const followOffset = new THREE.Vector3(0, 1.6, -5);
const lookOffset = new THREE.Vector3(0, 0.8, 0);

function updateDrive(dt) {
  if (!playerCar) return;

  // forward/back
  if (keys["KeyW"] || keys["ArrowUp"]) drive.speed += drive.accel * dt;
  else if (keys["KeyS"] || keys["ArrowDown"]) drive.speed -= drive.accel * dt;
  else {
    if (drive.speed > 0) drive.speed -= drive.decel * dt;
    if (drive.speed < 0) drive.speed += drive.decel * dt;
  }
  drive.speed = THREE.MathUtils.clamp(drive.speed, drive.maxReverse, drive.maxSpeed);

  // steering
  if (keys["KeyA"] || keys["ArrowLeft"]) drive.steer += drive.steerSpeed * dt;
  else if (keys["KeyD"] || keys["ArrowRight"]) drive.steer -= drive.steerSpeed * dt;
  else drive.steer *= 0.9;
  drive.steer = THREE.MathUtils.clamp(drive.steer, -drive.maxSteer, drive.maxSteer);

  // apply rotation & movement
  playerCar.rotation.y += drive.steer * drive.speed * 0.02;
  const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(playerCar.quaternion);
  playerCar.position.add(forward.multiplyScalar(drive.speed * dt));

  // camera follow only when user not interacting
  const desiredCam = followOffset.clone().applyQuaternion(playerCar.quaternion).add(playerCar.position);
  const desiredLook = lookOffset.clone().applyQuaternion(playerCar.quaternion).add(playerCar.position);

  if (!userInteracting) {
    camera.position.lerp(desiredCam, 0.1);
  }
  // always smooth the controls target to follow the car
  controls.target.lerp(desiredLook, 0.12);
  controls.update();
}

// ---------------------------
// Animation loop
// ---------------------------
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();

  updateDrive(dt);

  renderer.render(scene, camera);
}
animate();

// ---------------------------
// Handle resize
// ---------------------------
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
