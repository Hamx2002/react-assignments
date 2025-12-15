import React from "react";
import amenities from "../data/amenities";
import Amenity from "../components/Amenity";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "24px auto",
        padding: "0 16px",
        fontFamily: "system-ui, Arial",
      }}
    >
      <header style={{ marginBottom: 18 }}>
        <img src="/logo.png" alt="Planet Logo" width="200" />
        <div>
          <h1>Orbis Aequalis</h1>
          <p>
            <strong>Unitas et Aequalitas — Unity and Equality</strong>
          </p>
        </div>
        <nav aria-label="Main">
          <a href="#medical">Medical</a>
          {" • "}
          <a href="#education">Education</a>
          {" • "}
          <a href="#transport">Transport</a>
          {" • "}
          <a href="#housing">Housing</a>
          {" • "}
          <a href="#energy">Energy</a>
        </nav>
      </header>

      <main>
        <section id="hero" style={{ marginBottom: 24 }}>
          <h2>Welcome to Orbis Aequalis</h2>
          <p>
            A planet built on unity, equality and shared prosperity. Open to
            visitors and settlers from any world.
          </p>
        </section>

        {amenities.map((f) => (
          <Amenity key={f.id} item={f} />
        ))}

        <section id="cta" style={{ marginTop: 24, padding: "12px 0" }}>
          <h3>
            Want to become <strong>Comrade</strong> ?
          </h3>
          <p>
            Contact our Cultural Exchange Council:{" "}
            <a href="mailto:exchange@orbis-aequalis.example">
              exchange@orbis-aequalis.comrade
            </a>
          </p>
        </section>
      </main>

      <footer style={{ marginTop: 36, color: "#666" }}>
        <small>© Orbis Aequalis — Unitas et Aequalitas</small>
      </footer>
    </div>
  );
}
