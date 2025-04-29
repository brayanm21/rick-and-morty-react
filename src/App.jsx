import Home from "./pages/Home";
import "./App.css";
import "./assets/styles/themes.css";
import Navbar from "./layout/Navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./layout/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="app-wrapper">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/character/:id" element={<CharacterPage/>}/>
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
