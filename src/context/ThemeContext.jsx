// src/context/ThemeContext.js
import { createContext, useState, useContext, useEffect } from "react";

// Crear el contexto con 'light' como valor predeterminado
const ThemeContext = createContext();

// Hook para acceder al contexto de manera sencilla
export const useTheme = () => useContext(ThemeContext);

// Crear el proveedor para el contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => {
      return localStorage.getItem('theme') || 'dark';
    }
  ); // El estado inicial es lo que se traiga del localstorage

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //Este useEffect actualiza la clase del <body> al cambiar el tema ademas de que cada vez que realiza el cambio guarda en localstorage
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
