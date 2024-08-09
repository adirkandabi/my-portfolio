import { useEffect, useState } from "react";
import React from "react";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
  window.addEventListener("scroll", function () {
    const nav = this.document.querySelector("nav");
    if (this.window.scrollY > 0) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Logo" />

      <div className="sections">
        <a
          href="#home"
          className={activeLink === "home" ? "active nav-text" : "nav-text"}
          onClick={() => onUpdateActiveLink("home")}
        >
          Home
        </a>
        <a
          href="#skills"
          className={activeLink === "skills" ? "active nav-text" : "nav-text"}
          onClick={() => onUpdateActiveLink("skills")}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={activeLink === "projects" ? "active nav-text" : "nav-text"}
          onClick={() => onUpdateActiveLink("projects")}
        >
          Projects
        </a>
      </div>
      <span className="navrbar-social">
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
        <button className="vvd" onClick={() => console.log("connect")}>
          <span>Let's Connect</span>
        </button>
      </span>
    </nav>
  );
};
