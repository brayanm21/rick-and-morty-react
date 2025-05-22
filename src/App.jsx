import CharactersPage from "./pages/CharactersPage";
import "./App.css";
import "./assets/styles/themes.css";
import Navbar from "./layout/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./layout/Footer";
import { Routes, Route } from "react-router-dom";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="app-wrapper">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/characters" element={<CharactersPage />}/>
              <Route path="/characters/:id" element={<CharacterDetailPage/>}/>
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />}/>
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
