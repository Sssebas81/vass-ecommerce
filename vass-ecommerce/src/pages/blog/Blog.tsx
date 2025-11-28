import BlogContent from "../../components/blogContent/BlogContent";
import FeaturesBar from "../../components/featuresBar/FeaturesBar";
import Footer from "../../components/footer/Footer";
import Heropage from "../../components/hero/Heropage";

import Navbar from "../../components/navbar/Navbar";


function Blog() {
  return (
    <div>
        <Navbar/>
        < Heropage/>
        <BlogContent/>
        <FeaturesBar/>
        <Footer/>
    </div>
  );
}

export default Blog;