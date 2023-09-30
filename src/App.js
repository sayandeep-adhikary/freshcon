import Card from "./components/Card/Card";
import Faq from "./components/Faq/Faq";
import Follow from "./components/Follow/Follow";
import Footer from "./components/Footer/Footer";
import FreshProducts from "./components/FreshProducts/FreshProducts";
import Hero from "./components/Hero/Hero";
import MainProduct from "./components/MainProduct/MainProduct";
import Products from "./components/Products/Products";
import Recipe from "./components/Recipe/Recipe";

function App() {
  return (
    <>
      <Hero />
      <FreshProducts />
      <Products />
      <MainProduct />
      <Card />
      <Recipe />
      <Follow/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
