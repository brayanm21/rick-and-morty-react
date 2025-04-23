import React from "react";
import { useState } from "react";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <header className="navbar">
      <img
        // src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Emblem.png"
        // src="https://shop.warnerbros.co.uk/cdn/shop/files/Rick_and_Morty_Logo_Lockup_1.png?v=1697228078"
        src="https://res.cloudinary.com/dkfzj9tmk/image/upload/v1677166689/backend-project/Rick-And-Morty-Logo-Transparent-File_arpmel.png"
        alt="Logo"
        className="logo-img"
      />

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#inicio" onClick={() => setMenuOpen(false)}>
          Inicio
        </a>
        <a href="#servicios" onClick={() => setMenuOpen(false)}>
          Servicios
        </a>
        <a href="#contacto" onClick={() => setMenuOpen(false)}>
          Contacto
        </a>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </header>
  );
};

export default Header;
