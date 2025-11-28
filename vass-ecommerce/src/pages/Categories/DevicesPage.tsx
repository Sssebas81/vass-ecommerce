import DevicesProducts from "../../components/Devicesproducts/Devices";
import FeaturesBar from "../../components/featuresBar/FeaturesBar";
import Footer from "../../components/footer/Footer";
import HeropageDevices from "../../components/hero/HeroPageDevices";
import Navbar from "../../components/navbar/Navbar";

function DevicesPage() {
  return (
    <div>
      <Navbar />
      <HeropageDevices />
      <DevicesProducts/>
      <FeaturesBar/>
      <Footer/>
    </div>
  );
}

export default DevicesPage;
 