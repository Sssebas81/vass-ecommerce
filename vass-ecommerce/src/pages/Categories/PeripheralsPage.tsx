import FeaturesBar from "../../components/featuresBar/FeaturesBar";
import Footer from "../../components/footer/Footer";
import HeropagePeripherals from "../../components/hero/HeroPagePeripherals";
import Navbar from "../../components/navbar/Navbar";
import PeripheralsProducts from "../../components/Peripheralsproducts/Peripherals";

function PeripheralsPage() {
  return (
    <div>
      <Navbar />
      <HeropagePeripherals />
      <PeripheralsProducts />    
      <FeaturesBar/>
      <Footer/>
    </div>
  );
}

export default PeripheralsPage;
 