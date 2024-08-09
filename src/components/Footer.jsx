import { useEffect, useState } from "react";
import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <p>How to reach me :</p>
        <div className="social-icon">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/adirkandabi"
            target="_blank"
          >
            <img src={navIcon1} alt="linkedin" />
          </a>
          <a href="https://www.facebook.com/adir.kandabi/" target="_blank">
            <img src={navIcon2} alt="facebook" />
          </a>
          <a href="https://github.com/adirkandabi" target="_blank">
            <img src={navIcon3} alt="github" />
          </a>
        </div>
      </div>
      <p className="footer-credit">
        &copy;2024 Made by
        <a href="https://www.linkedin.com/in/adirkandabi" target="_blank">
          Adir Kandabi
        </a>
      </p>
    </footer>
  );
};
