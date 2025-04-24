import Home from "./pages/Home";
import "./App.css";
import './assets/styles/themes.css';
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
