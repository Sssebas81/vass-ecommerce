import DevicesProducts from "../../components/Devicesproducts/Devices";
import FeaturesBar from "../../components/FeaturesBar/FeaturesBar";
import Footer from "../../components/footer/Footer";
import HeropageDevices from "../../components/hero/HeroPageDevices";
import Navbar from "../../components/navbar/Navbar";
import PeripheralsProducts from "../../components/Peripheralsproducts/Peripherals";

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
 