import Benefits from "./components/benefits/Benefits";
import Delivery from "./components/delivery/Delivery";
import HeaderBottom from "./components/header-bottom/HeaderBottom";
import HeaderTop from "./components/header-top/HeaderTop";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import BenefitsBottom from "./components/benefits-bottom/BenefitsBottom";
import "./scss/style.scss"

function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <HeaderBottom/>
      <Hero/>
      <Benefits/>
      <Products/>
      <Delivery/>
      <BenefitsBottom/>
    </div>
  );
}

export default App;
