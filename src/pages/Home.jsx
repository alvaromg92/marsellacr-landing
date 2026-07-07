import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import FeaturedProducts from "../components/FeaturedProducts";
import heroBg from "../assets/images/hero-bg.jpeg";
import Store from "../components/Store";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />  
      <FeaturedProducts />
      <Store /> 
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;