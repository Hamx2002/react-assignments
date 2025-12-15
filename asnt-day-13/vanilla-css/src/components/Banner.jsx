import React from "react";
import bannerImg from "../assets/banner.png";

export default function Banner() {
  return (
    <section className="banner">
      <div
        className="banner-bg"
        style={{ backgroundImage: `url(${bannerImg})` }}
        role="img"
        aria-label="banner"
      >
        <div className="banner-content container">
          
        </div>
      </div>
    </section>
  );
}
