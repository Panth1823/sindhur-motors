import React from "react";
import NavLogo1 from "../assets/Footer/logo2.webp";
import NavLogo2 from "../assets/Navbar/logo2.webp";
import SindhurSvg from "../assets/Footer/sindhur.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-nav-row">
          <a href="#/" className="footer-brand">
            <img
              src={NavLogo2}
              alt="Sindhur Motors Icon"
              className="footer-logo2"
            />
            <img src={NavLogo1} alt="Sindhur Motors" className="footer-logo1" />
          </a>
          <nav className="footer-nav-links">
            <a href="#/">Home</a>
            <a href="#/about">About</a>
            <a href="#/contact">Contact</a>
            <a href="#/privacy">Privacy</a>
            <a href="#/terms">Terms</a>
          </nav>
        </div>

        <div className="footer-meta-row">
          <span>© 2026 All rights reserved</span>
          <span>
            Crafted by{" "}
            <a
              href="https://www.koiostudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="koio-link"
            >
              Koiostudio
            </a>
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-blur-left" />
        <img src={SindhurSvg} alt="SINDHUR" className="footer-bottom-svg" />
        <div className="footer-blur-right" />
      </div>
    </footer>
  );
}
