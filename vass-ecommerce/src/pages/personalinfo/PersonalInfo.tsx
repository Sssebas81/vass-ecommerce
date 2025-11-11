import FeaturesBar from "../../components/featuresBar/FeaturesBar";
import Footer from "../../components/footer/Footer";
import FormPersonalInfo from "../../components/formpersonalinfo/formpersonalinfo";
import Heropagepersonalinfo from "../../components/hero/Heropagepersonalinfo";
import Navbar from "../../components/navbar/Navbar";


function PersonalInfo() {
  return (
    <div>
      <Navbar />
      <Heropagepersonalinfo />
      <FormPersonalInfo />
      <FeaturesBar/>
      <Footer/>
    </div>
  );
}

export default PersonalInfo;
 