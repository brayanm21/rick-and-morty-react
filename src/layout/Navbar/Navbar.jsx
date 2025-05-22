import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Cambiar clase del body según el tema
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  // Toggle de menú
  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  // Cerrar menú al hacer clic en un enlace
  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className="navbar">
      <img
        src="https://res.cloudinary.com/dkfzj9tmk/image/upload/v1677166689/backend-project/Rick-And-Morty-Logo-Transparent-File_arpmel.png"
        alt="Logo"
        className="logo-img"
      />

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>Inicio</Link>
        <Link to="/characters" onClick={handleLinkClick}>Personajes</Link>
        <Link to="/about" onClick={handleLinkClick}>Sobre el Proyecto</Link>

        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "dark" ? <FaMoon /> : <FaSun />}
        </button>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes className="hamburger-icon" /> : <FaBars className="hamburger-icon" />}
      </div>
    </header>
  );
};

export default Navbar;
