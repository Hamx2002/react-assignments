import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Community from "./Community";
import CTA from "./CTA";
import Footer from "./Footer";

const Home = () => {
  return (
    <main className="w-full relative">
      <Hero />
      <Features />
      <Community />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
