import "../styles/FeaturedProducts.css";
import products from "../data/products";

function FeaturedProducts() {

  return (

    <section className="featured" id="features">

      <div className="featured-title">

        <span>Favoritos</span>

        <h2>Productos Destacados</h2>

      </div>

      <div className="products-grid">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

           <div className="product-image">

                <img
                    src={product.image}
                    alt={product.name}
                />

            </div>

            <h3>{product.name}</h3>

          </div>

        ))}

      </div>

    </section>

  );

}

export default FeaturedProducts;