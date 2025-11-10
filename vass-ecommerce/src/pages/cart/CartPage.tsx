import Navbar from "../../components/navbar/Navbar";
import Footer from  "../../components/footer/Footer";
import Cart from "../../components/cart/Cart";
import CartHero from "../../components/carthero/CartHero";
import FeaturesBar from "../../components/FeaturesBar/FeaturesBar";


function CartPage() {
    return (
        <div>
            <Navbar />
            <CartHero/>
            <Cart/>
            <FeaturesBar/>
            <Footer />
        </div>
    );
}

export default CartPage;