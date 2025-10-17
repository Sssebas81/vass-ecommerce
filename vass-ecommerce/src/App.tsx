import Categories from "./components/categories/Categories";
import Heropage from "./components/hero/Heropage";
import Navbar from "./components/navbar/Navbar";
import OurProducts from "./components/ourproducts/OurProducts";
import SetupIdeas from "./components/setupideas/SetupIdeas";
import Footer from "./components/footer/Footer";
function App() {
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

export default App;
 