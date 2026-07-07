import "../styles/Hero.css";
import { Link } from "react-router-dom";
import heroBg from "../assets/images/hero-bg.jpeg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-subtitle">
          Perfumes 100% Originales
        </span>

        <h1>
          Nuestras fragancias que perduran
        </h1>

        <p>
          Elegancia, calidad y exclusividad para hombre y mujer.
          Encuentra las mejores marcas con fórmulas duraderas y de alta calidad.
        </p>

        <div className="hero-buttons">

          <Link to="/gallery" className="btn-primary">
            Ver Productos
          </Link>

          <a
            href="https://wa.me/50687195863"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            WhatsApp
          </a>

        </div>

      </div>

      <div className="hero-image">
        <img src={heroBg} alt="Perfume Premium" />
      </div>

    </section>
  );
}

export default Hero;
