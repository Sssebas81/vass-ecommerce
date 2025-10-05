import Categories from "./components/categories/Categories";
import Heropage from "./components/hero/Heropage";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Heropage/>
      <Categories/>
    </div>
  );
}

export default App;
