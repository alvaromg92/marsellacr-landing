import "../styles/Reviews.css";

function Reviews() {
  return (
    <section className="reviews" id="reviews">

      <div className="reviews-title">

        <span>Opiniones</span>

        <h2>Lo que dicen nuestros clientes</h2>

      </div>

      <div className="reviews-container">

        <div className="review-card">

          <div className="stars">
            ★★★★★
          </div>

          <p>
            Excelente atención y perfumes completamente originales.
            Sin duda volveré a comprar.
          </p>

          <h4>— María G.</h4>

        </div>

        <div className="review-card">

          <div className="stars">
            ★★★★★
          </div>

          <p>
            Gran variedad de marcas y precios muy competitivos.
            Muy recomendados.
          </p>

          <h4>— Daniel R.</h4>

        </div>

        <div className="review-card">

          <div className="stars">
            ★★★★★
          </div>

          <p>
            Encontré el perfume que buscaba desde hace meses.
            Excelente servicio.
          </p>

          <h4>— Álvaro M.</h4>

        </div>

      </div>

    </section>
  );
}

export default Reviews;