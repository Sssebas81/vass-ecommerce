import Favorites from "../../components/favorites/Favorites";
import FavoritesHero from "../../components/favoriteshero/FavoritesHero";
import FeaturesBar from "../../components/FeaturesBar/FeaturesBar";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";


function FavoritesPage() {
  return (
    <div>
      <Navbar />
      <FavoritesHero/>
      <Favorites/>
      <FeaturesBar/>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
 