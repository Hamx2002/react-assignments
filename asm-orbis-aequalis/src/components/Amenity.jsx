import React from "react";

export default function Amenity({ item }) {
  return (
    <section id={item.id} style={{padding: "20px 0"}}>
      <h3 id={`${item.id}-title`}>{item.title}</h3>
      <p style={{fontStyle: "italic"}}>{item.tagline}</p>
      <ul>
        {item.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </section>
  );
}
