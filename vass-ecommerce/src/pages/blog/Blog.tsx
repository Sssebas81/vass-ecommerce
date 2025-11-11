import BlogContent from "../../../components/blogContent/BlogContent";
import FeaturesBar from "../../components/featuresBar/FeaturesBar";
import Footer from "../../components/footer/Footer";
import HeropageBlog from "../../../components/heropageBlog/HeropageBlog";
import Navbar from "../../components/navbar/Navbar";


function Blog() {
  return (
    <div>
        <Navbar/>
        <HeropageBlog/>
        <BlogContent/>
        <FeaturesBar/>
        <Footer/>
    </div>
  );
}

export default Blog;