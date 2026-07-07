import "../styles/Footer.css";
import logo from "../assets/logo/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">

          <img src={logo} alt="MarsellaCR" />

          <p>
            Perfumes originales para hombre y mujer,
            con las mejores marcas internacionales.
          </p>

        </div>

        <div className="footer-info">

          <h3>Contacto</h3>

        <div className="contact-item">
            <span>📱</span>
            <p>WhatsApp: +506 8719-5863</p>
        </div>

        <div className="contact-item">
            <span>📍</span>
            <p>Costa Rica</p>
        </div>

        <div className="contact-item">
            <span>📧</span>
            <p>marsellaperfumeriacr@gmail.com</p>
        </div>

        </div>

        <div className="footer-social">

        <h3>Síguenos</h3>

        <a
            href="https://www.instagram.com/marsella.cr"
            target="_blank"
            rel="noreferrer"
        >
            Instagram
        </a>

        <a
            href="https://www.facebook.com/profile.php?id=100089205374440"
            target="_blank"
            rel="noreferrer"
        >
            Facebook
        </a>

        <a
            href="https://www.tiktok.com/@marsella.perfumeria"
            target="_blank"
            rel="noreferrer"
        >
            TikTok
        </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 MarsellaCR. Todos los derechos reservados.
        </p>

      </div>

    </footer>
  );
}

export default Footer;