import Footer from "../../components/footer/Footer";
import FormPersonalInfo from "../../components/formpersonalinfo/formpersonalinfo";
import Heropage from "../../components/hero/Heropage";
import Heropagepersonalinfo from "../../components/hero/Heropagepersonalinfo";
import Navbar from "../../components/navbar/Navbar";


function PersonalInfo() {
  return (
    <div>
      <Navbar />
      <Heropagepersonalinfo />
      <FormPersonalInfo />
      <Footer/>
    </div>
  );
}

export default PersonalInfo;
 