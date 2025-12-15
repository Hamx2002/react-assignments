import React from "react";
import Navbar from "./components/NavBar.jsx";
import Banner from "./components/Banner.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

import webDevImg from "./assets/1.png";
import marketingImg from "./assets/2.png";
import mobileImg from "./assets/3.png";

export default function App() {
  const cards = [
    { id: 1, image: webDevImg },
    { id: 2, image: marketingImg },
    { id: 3, image: mobileImg },
  ];

  return (
    <div className="site">
      <Navbar />
      <Banner />
      <main className="container">
        <section className="cards">
          {cards.map((c) => (
            <Card
              key={c.id}
              image={c.image}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
