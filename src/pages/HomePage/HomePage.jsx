import "./HomePage.css";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/characters`);
  };

  return (
    <div className="home-container">
      <h1 className="title">Bienvenido al universo de Rick and Morty</h1>
      <p className="description">Explora todos los personajes, lugares y locuras interdimensionales.</p>
      <img
        src="https://res.cloudinary.com/dkfzj9tmk/image/upload/v1677166689/backend-project/Rick-And-Morty-Logo-Transparent-File_arpmel.png"
        alt="Rick and Morty"
        className="banner"
      />
      <Button onClick={handleClick}>Explorar personajes</Button>
    </div>
  );
};

export default HomePage;
