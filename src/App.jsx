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
        <Navbar />
          <Home />
        <Footer />
    </ThemeProvider>
    </>
  );
}

export default App;
