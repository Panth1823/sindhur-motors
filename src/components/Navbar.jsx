import React, { useState, useEffect } from "react";
import NavLogo1 from "../assets/Navbar/logo1.webp";
import NavLogo2 from "../assets/Navbar/logo2.webp";
import { useRoute } from "../lib/router.js";

export default function Navbar() {
  const route = useRoute();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navbar">
        <a href="#/" className="navbar-brand" onClick={closeMenu}>
          <img src={NavLogo2} alt="Sindhur Motors Icon" className="navbar-logo2" />
          <img src={NavLogo1} alt="Sindhur Motors" className="navbar-logo1" />
        </a>
        <div className="navbar-tabs">
          <div className="navbar-links">
            <a href="#/" className={route === "/" ? "active" : ""}>
              Home
            </a>
            <a href="#/about" className={route === "/about" ? "active" : ""}>
              About
            </a>
          </div>
          <div className="navbar-divider" />
          <a href="#/contact" className="navbar-contact-btn">
            Contact
          </a>
        </div>
        <button
          className={`navbar-hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="navbar-hamburger-icon"
            >
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="navbar-hamburger-icon"
            >
              <path
                d="M4 8H20M4 16H20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          <a
            href="#/"
            className={route === "/" ? "active" : ""}
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#/about"
            className={route === "/about" ? "active" : ""}
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#/contact"
            className={`mobile-nav-contact-btn ${route === "/contact" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
