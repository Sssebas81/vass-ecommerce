import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Heropage from "../../components/hero/Heropage";
import Navbar from "../../components/navbar/Navbar";
import OurProducts from "../../components/ourproducts/OurProducts";
import SetupIdeas from "../../components/setupideas/SetupIdeas";

function Home() {
  return (
    <div>
      <Navbar />
      <Heropage/>
      <Categories/>
      <OurProducts/>
      <SetupIdeas/>
      <Footer/>
    </div>
  );
}

export default Home;
 