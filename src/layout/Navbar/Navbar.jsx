import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext"; // Importar el hook para el tema
import "./Navbar.css";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Obtener el tema y la función para alternarlo

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <header className="navbar">
      <img
        src="https://res.cloudinary.com/dkfzj9tmk/image/upload/v1677166689/backend-project/Rick-And-Morty-Logo-Transparent-File_arpmel.png"
        alt="Logo"
        className="logo-img"
      />

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
        <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>

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
