import FeaturesBar from "../../components/featuresbar/FeaturesBar";
import Footer from "../../components/footer/Footer";
import GamingProducts from "../../components/Gamingproducts/Gaming";
import HeropageGaming from "../../components/hero/HeroPageGaming";
import Navbar from "../../components/navbar/Navbar";

function GamingPage() {
  return (
    <div>
      <Navbar />
      <HeropageGaming/>
      <GamingProducts />
      <FeaturesBar/>
      <Footer/>
    </div>
  );
}

export default GamingPage;
 