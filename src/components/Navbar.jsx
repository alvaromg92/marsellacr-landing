import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png"; // Cambia el nombre si tu archivo se llama diferente

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="MarsellaCR Logo" />
        </Link>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/gallery">Galería</Link>
          </li>

          <li>
            <a href="#brands">Marcas</a>
          </li>

          <li>
            <a href="#reviews">Opiniones</a>
          </li>

          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;