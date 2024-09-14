import React from "react";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title">
        <p className="line line1">Hi!</p>
        <p className="line line2">
          I'm <span>A</span>dir<span>,</span>
        </p>
        <p className="line line3">
          <span>F</span>ull <span>S</span>tack <span>D</span>eveloper
          <span>.</span>
        </p>
      </div>
      <button
        className="animation-btn connect-btn"
        onClick={() => {
          const element = document.querySelector(`.connect-container`);
          const rect = element.getBoundingClientRect();
          const yPosition = rect.top + window.scrollY - 150;
          window.scrollTo({
            top: yPosition,
            behavior: "smooth",
          });
        }}
      >
        Let's Connect!
      </button>
    </div>
  );
};
