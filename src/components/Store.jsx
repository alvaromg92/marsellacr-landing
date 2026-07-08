import "../styles/Store.css";
import kiosko from "../assets/images/store/kiosko.jpeg";

function Store() {
  return (
    <section className="store" id="store">

      <div className="store-image">

        <img src={kiosko} alt="Marsella Perfumería" />

      </div>

      <div className="store-content">

        <span>Nuestra tienda física</span>

        <h2>Por que elegir productos Marsellacr?</h2>

        <div className="store-features">

            <div>✓ Perfumes 100% originales y garantizados.</div>

            <div>✓ Atención personalizada para ayudarte a encontrar la fragancia ideal.</div>

            <div>✓ Amplia variedad de marcas premium para hombre y mujer.</div>

        </div>

      </div>

    </section>
  );
}

export default Store;