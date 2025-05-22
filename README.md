# Rick & Morty Explorer

Una SPA desarrollada en React que permite explorar personajes del universo de Rick and Morty utilizando su API pública. La aplicación incluye funcionalidades de búsqueda, paginación, scroll infinito y manejo avanzado de errores.

---


## 🚀 Tecnologías utilizadas

- ⚛️ **React** (con Vite)
- 🔄 **React Router DOM para enrutamiento**
- 📦 **Custom Hooks** para lógica reutilizable
- 🧠 **Context API** para temas y estado global
- 🌗 **Soporte modo claro / oscuro**
- 🌐 **Internacionalización** (ES / EN)
- 🎨 **CSS Modules para estilos locales**
- 🎯 **Iconos dinámicos con React Icons**

---

## 📁 Estructura del proyecto

```
src/
├── assets/         # Estilos globales (styles/)
├── components/     # Reutilizables: Button, StatusBadge, etc.
│ ├── character/
│ ├── ErrorSearch/
│ └── ui/
├── context/        # ThemeContext, etc.
├── hooks/          # useFetch, useSearch, useInfiniteScroll
├── layout/         # Navbar, Footer
├── pages/          # Home, Characters, Detail, About, NotFound
├── services/       # Conexión a la API
├── utils/          # Helpers, traducciones
├── App.jsx         # Componente principal
├── main.jsx        # Entry point
└── index.css       # Estilos base
```

---

## 🧭 Navegación principal

### `HomePage`
- Bienvenida y botón de navegación a personajes.

### `CharactersPage`
- Muestra los personajes con paginación en la vista inicial.
- Al realizar una búsqueda:
  - Se realiza un nuevo `fetch` con el nombre ingresado.
  - El paginador desaparece.
  - Se activa el **infinite scroll** para seguir cargando resultados.
- Si se borra el texto del buscador, se vuelve al estado anterior y reaparece el paginador.

### `CharacterDetailPage`
- Muestra los detalles de un personaje basado en el ID de la URL.
- Si el ID no existe, se muestra un error personalizado.

### `AboutPage`
- Página informativa sobre el proyecto.

### `NotFoundPage`
- Página 404 personalizada para rutas inexistentes.

---

## ⚙️ Funcionalidades destacadas

- 🔍 **Búsqueda de personajes por nombre**
- 📄 **Paginación clásica**
- 🔁 **Scroll infinito** cuando se filtra
- ❗  **Manejo de errores visuales**
- ♻️ **Componentes reutilizables**:
  - `Button`, `StatusBadge`, `SearchInput`, `Paginator`, etc.
- 📱 **Diseño responsivo**

---

## 🧪 Cómo correr este proyecto

```bash
# 1. Clona el repositorio
https://github.com/tu_usuario/rick-morty-app

# 2. Instala dependencias
npm install

# 3. Corre el servidor local
npm run dev
```

---

## ✨ Créditos

- API oficial: https://rickandmortyapi.com/
- Desarrollado por Brayan Muñoz

---
