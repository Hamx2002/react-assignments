// Day3_MovieBanner.jsx (Simple Version with external CSS)
// Uses a separate CSS file: Day3_MovieBanner.css

import React from "react";
import "./MovBan.css";
import banner from "./banner.jpg"
import main from "./main.jpeg"
import sub1 from "./sub1.jpeg"
import sub2 from "./sub2.jpeg"

export default function MovieBanner() {
  return (
    <div className="banner-container">
      {/* Movie Poster */}
      <img
        className="banner-movie-image"
        src={banner}
        alt="Movie Poster"
      />

      {/* Title */}
      <h2 className="banner-title">The Silent Horizon</h2>

      {/* Synopsis */}
      <p className="banner-synopsis">
        A team of explorers uncovers a mysterious signal coming from deep space.
        As they move closer to the source, they realise it may not be what they expected.
      </p>

      {/* Cast Section */}
      <div>
        <h3 className="banner-cast-heading">Cast</h3>
        <div className="banner-cast-container">
          <img
            className="banner-cast-image"
            src={main}
            alt="Cast 1"
          />
          <img
            className="banner-cast-image"
            src={sub1}
            alt="Cast 2"
          />
          <img
            className="banner-cast-image"
            src={sub2}
            alt="Cast 3"
          />
        </div>
      </div>
    </div>
  );
}

