import React, { useState } from "react";
import "./header.css";

export const Header = () => {
  /*=============Change Background Header=============*/
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*=============Toggle Menu=============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const closeMenu = () =>{
    showMenu(false);
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Gabo
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => {setActiveNav("#home"); closeMenu();}}
                className={
                  activeNav === "#home" ? "nav__links active-link" : "nav__links"
                }
              >
                <i className="uil uil-estate nav-icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => {setActiveNav("#about"); closeMenu();}}
                className={
                  activeNav === "#about"
                    ? "nav__links active-link"
                    : "nav__links"
                }
              >
                <i className="uil uil-user nav-icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => {setActiveNav("#skills"); closeMenu();}}
                className={
                  activeNav === "#skills"
                    ? "nav__links active-link"
                    : "nav__links"
                }
              >
                <i className="uil uil-file-alt nav-icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => {setActiveNav("#services"); closeMenu();}}
                className={
                  activeNav === "#services"
                    ? "nav__links active-link"
                    : "nav__links"
                }
              >
                <i className="uil uil-briefcase-alt nav-icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() =>{setActiveNav("#portfolio"); closeMenu();}}
                className={
                  activeNav === "#portfolio"
                    ? "nav__links active-link"
                    : "nav__links"
                }
              >
                <i className="uil uil-scenery nav-icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => {setActiveNav("#contact"); closeMenu();}}
                className={
                  activeNav === "#contact"
                    ? "nav__links active-link"
                    : "nav__links"
                }
              >
                <i className="uil uil-message nav-icon"></i> Contact me
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
