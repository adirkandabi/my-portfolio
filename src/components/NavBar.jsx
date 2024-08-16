import { useEffect, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  window.addEventListener("scroll", function () {
    const nav = this.document.querySelector("nav");
    const scrollY = window.scrollY || this.document.documentElement.scrollTop;

    if (scrollY > 0) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    switch (value) {
      case "home":
        window.scrollTo(0, 0);
        break;
      case "about":
        const element = document.querySelector(".about-container");
        const rect = element.getBoundingClientRect();
        const yPosition = rect.top + window.scrollY - 150;
        console.log(yPosition);
        window.scrollTo({
          top: yPosition,
          behavior: "smooth",
        });
    }
  };
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Logo" />

      <div className="sections">
        <button
          className={
            activeLink === "home" ? "active nav-text home" : "nav-text home"
          }
          onClick={() => onUpdateActiveLink("home")}
        >
          Home
        </button>
        <button
          className={
            activeLink === "about" ? "active nav-text about" : "nav-text about"
          }
          onClick={() => onUpdateActiveLink("about")}
        >
          About
        </button>
        <button
          className={
            activeLink === "projects"
              ? "active nav-text projects"
              : "nav-text projects"
          }
          onClick={() => onUpdateActiveLink("projects")}
        >
          Projects
        </button>
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
        <button
          className="navbar-connect-btn"
          onClick={() => console.log("connect")}
        >
          <span>Let's Connect</span>
        </button>
      </span>
      <FontAwesomeIcon
        className="menu-btn"
        icon={faBars}
        onClick={() => toggleMenu()}
      />
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/adirkandabi"
            target="_blank"
          >
            <img src={navIcon1} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/adir.kandabi/" target="_blank">
            <img src={navIcon2} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://github.com/adirkandabi" target="_blank">
            <img src={navIcon3} alt="github" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
