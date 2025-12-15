import React from "react";
import './app.css'

// A small, reusable Card component
function Card({ title, subtitle, children, imageAlt }) {
  return (
    <article className="max-w-sm rounded-2xl shadow-md overflow-hidden p-4 bg-white">
      <div className="h-40 rounded-md bg-gray-100 flex items-center justify-center mb-4">
        {/* placeholder image area — replace with <img> if you have images */}
        <span className="text-sm text-gray-500">{imageAlt || "Image"}</span>
      </div>

      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{subtitle}</p>

      <div className="text-sm text-gray-700">{children}</div>

      <div className="mt-4 flex justify-end">
        <button className="px-3 py-1 rounded-md border text-sm">Action</button>
      </div>
    </article>
  );
}

// Main exported component rendering three simple cards
export default function SimpleReactCards() {
  const cards = [
    {
      title: "Card One",
      subtitle: "A short subtitle",
      body: "This is a short description for card one. Use this area for a brief summary or feature list.",
      imageAlt: "Card 1 image",
    },
    {
      title: "Card Two",
      subtitle: "Another subtitle",
      body: "Card two can contain slightly longer text — maybe a small paragraph explaining something important.",
      imageAlt: "Card 2 image",
    },
    {
      title: "Card Three",
      subtitle: "Final subtitle",
      body: "The third card finishes the row. Replace this text with whatever content you need.",
      imageAlt: "Card 3 image",
    },
  ];

  return (
    <section className="p-6 bg-gray-50 min-h-screen flex items-start justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        {cards.map((c, i) => (
          <Card
            key={i}
            title={c.title}
            subtitle={c.subtitle}
            imageAlt={c.imageAlt}
          >
            {c.body}
          </Card>
        ))}
      </div>
    </section>
  );
}
