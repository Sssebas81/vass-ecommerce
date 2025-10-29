import HeropageShop from "../components/hero/HeroPageShop";
import Navbar from "../components/navbar/Navbar";
import AllProducts from "../components/productsshop/ProductsShopPage";


function ShopPage(){
    return(
<div>
<Navbar />
<HeropageShop />
<AllProducts />
</div>
    );
}

export default ShopPage;