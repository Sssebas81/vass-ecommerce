import Categories from "./components/categories/Categories";
import Heropage from "./components/hero/Heropage";
import Navbar from "./components/navbar/Navbar";
import OurProducts from "./components/ourproducts/OurProducts";
function App() {
  return (
    <div>
      <Navbar />
      <Heropage/>
      <Categories/>
      <OurProducts/>
    </div>
  );
}

export default App;
 