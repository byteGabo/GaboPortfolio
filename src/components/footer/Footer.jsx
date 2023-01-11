import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Gabo</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#clients" className="footer__link">
              Clients
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/byteGabo"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-ch/"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.behance.net/gabrielchv"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-behance"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Gabriel Chaves. Copyright-Free
        </span>
      </div>
    </footer>
  );
};
