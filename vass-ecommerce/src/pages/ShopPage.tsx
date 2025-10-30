import FeaturesBar from "../components/featuresbar/FeaturesBar";
import Footer from "../components/footer/Footer";
import HeropageShop from "../components/hero/HeroPageShop";
import Navbar from "../components/navbar/Navbar";
import AllProducts from "../components/productsshop/ProductsShopPage";


function ShopPage(){
    return(
<div>
<Navbar />
<HeropageShop />
<AllProducts />
<FeaturesBar />
<Footer/>
</div>
    );
}

export default ShopPage;