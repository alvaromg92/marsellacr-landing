import { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="MarsellaCR Logo" />
        </Link>
      </div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>
              Inicio
            </Link>
          </li>

          <li>
            <a href="#features" onClick={closeMenu}>
              Destacados
            </a>
          </li>

          <li>
            <a href="#brands" onClick={closeMenu}>
              Marcas
            </a>
          </li>

          <li>
            <a href="#reviews" onClick={closeMenu}>
              Opiniones
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;