import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>Sobre este proyecto</h1>
      <p>
  Rick & Morty Explorer es una aplicación SPA hecha con React que permite explorar personajes de la famosa serie usando su API oficial. 
  Esta página proporciona información técnica sobre cómo está construida la app, qué tecnologías utiliza y cómo está organizada.
</p>

      <section>
        <h2>🚀 Tecnologías utilizadas</h2>
        <ul className="custom-list">
          <li>⚛️ React + Vite para desarrollo rápido</li>
          <li>🧭 React Router DOM para la navegación</li>
          <li>📡 API pública de Rick and Morty</li>
          <li>
            🎨 CSS Modules desde <code>assets/styles</code>
          </li>
          <li>🧠 Custom Hooks para lógica reutilizable</li>
          <li>🌐 Context API para el manejo global del estado</li>
          <li>🌗 Soporte para modo claro/oscuro</li>
          <li>🌍 Soporte para traducción ES / EN</li>
          <li>🎯 React Icons para visuales consistentes</li>
        </ul>
      </section>

      <section>
        <h2>📄 Páginas principales</h2>
        <ul className="custom-list">
          <li>
            <strong>HomePage:</strong> introducción y navegación inicial
          </li>
          <li>
            <strong>CharactersPage:</strong> listado de personajes con
            paginación e infinite scroll
          </li>
          <li>
            <strong>CharacterDetailPage:</strong> detalles de personaje por ID
          </li>
          <li>
            <strong>AboutPage:</strong> información sobre el proyecto
          </li>
          <li>
            <strong>NotFoundPage:</strong> página de error personalizada (404)
          </li>
        </ul>
      </section>

      <section>
        <h2>🧩 Funcionalidades clave</h2>
        <ul className="custom-list">
          <li>Explora personajes por nombre con resultados en tiempo real</li>
          <li>Scroll infinito para búsquedas dinámicas</li>
          <li>Paginación tradicional cuando no hay búsqueda activa</li>
          <li>
            Detalle individual del personaje: nombre, estado, especie, origen e
            imagen
          </li>
          <li>
            Manejo robusto de errores: sin resultados, rutas inválidas, IDs no
            existentes
          </li>
          <p>
            Componentes reutilizables: <code>Button</code>,{" "}
            <code>StatusBadge</code>, <code>SearchInput</code>,{" "}
            <code>Paginator</code>
          </p>
        </ul>
      </section>

      <section>
        <h2>📁 Organización del código</h2>
        <div className="code-block">
          <pre>{String.raw`
src/
├── assets/              # Estilos globales
│   └── styles/
├── components/          # Reutilizables
│   ├── character/
│   ├── ErrorSearch/
│   └── ui/
├── context/             # ThemeContext, etc.
├── hooks/               # Custom Hooks
├── layout/              # Navbar, Footer
├── pages/               # Home, About, Characters, Detail, NotFound
├── services/            # API
├── utils/               # Helpers, traducción
├── App.jsx
├── main.jsx
└── index.css
`}</pre>
        </div>
        <p>
          La estructura del código sigue una arquitectura modular para mejorar
          el mantenimiento y la escalabilidad. Cada componente se importa desde
          su archivo <code>index.jsx</code> para facilitar el acceso. Los
          estilos están encapsulados con <strong>CSS Modules</strong>.
        </p>
      </section>

      <section>
        <h2>📦 Instalación y uso</h2>
        <p>Sigue estos pasos para correr el proyecto localmente:</p>
        <div className="code-block">
          <pre>{String.raw`
# 1. Clona el repositorio
git clone https://github.com/brayanm21/rick-and-morty-react

# 2. Instala dependencias
npm install

# 3. Corre el servidor local
npm run dev
`}</pre>
        </div>
      </section>

      <section>
        <h2>✨ Créditos</h2>
        <p>
          Este proyecto fue desarrollado por <strong>Brayan Muñoz</strong>
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
