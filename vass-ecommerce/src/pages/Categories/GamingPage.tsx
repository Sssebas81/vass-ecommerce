import FeaturesBar from "../../components/FeaturesBar/FeaturesBar";
import Footer from "../../components/footer/Footer";
import HeropageGaming from "../../components/hero/HeroPageGaming";
import Navbar from "../../components/navbar/Navbar";

function GamingPage() {
  return (
    <div>
      <Navbar />
      <HeropageGaming/>
      <FeaturesBar/>

      <Footer/>
    </div>
  );
}

export default GamingPage;
 