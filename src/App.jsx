import Home from "./pages/Home";
import "./App.css";
import './assets/styles/themes.css';
import Navbar from "./layout/Navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <>
      <ThemeProvider>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
