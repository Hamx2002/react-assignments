import React from "react";

export default function App() {
  // show and hide
  const showBox = 1;

  // traffic light
  const current = "yellow";

  // story
  const heroName = "Alan Turing";
  const age = 24;
  const saved = true;
  const machine = ""; // falsy
  const invention = machine || "The Bombe"; // fallback

  return (
    <div>
      <h2>Box Example</h2>
      {showBox && (
        <div style={{ width: 100, height: 100, background: "purple" }}></div>
      )}
      {!showBox && <p>Box is hidden</p>}

      <h2>Traffic Light</h2>
      <div>
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: current === "red" ? "red" : "gray",
          }}
        ></div>
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: current === "yellow" ? "yellow" : "gray",
          }}
        ></div>
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: current === "green" ? "green" : "gray",
          }}
        ></div>
      </div>

      <h2>Story</h2>
      <p>
        This is the story of {heroName}. At just {age} years old, he created{" "}
        {invention}, a machine that changed history. Did he save many lives?{" "}
        {saved ? "Yes, he did." : "No one knows."}
      </p>
    </div>
  );
}
