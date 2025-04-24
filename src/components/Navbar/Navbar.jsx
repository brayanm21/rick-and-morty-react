import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext"; // Importar el hook para el tema
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Obtener el tema y la función para alternarlo

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Aplicar la clase del tema al body cuando el tema cambia
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme"); // Elimina ambas clases
    document.body.classList.add(`${theme}-theme`); // Agrega la clase correspondiente al tema
  }, [theme]); // Se ejecuta cada vez que el tema cambia

  return (
    <header className="navbar">
      <img
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

          <button
          className={`theme-toggle-btn ${theme === "dark" ? "dark" : "light"}`}
          onClick={toggleTheme}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
        </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>

      {/* Botón para cambiar el tema */}
    </header>
  );
};

export default Navbar;
