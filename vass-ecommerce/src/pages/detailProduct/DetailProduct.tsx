import { useParams } from "react-router-dom";
import BarBlack from "../../components/BarBlack/BarBlack";
import ProductDetail from "../../components/DetailProduct/ProductDetail";
import Navbar from "../../components/navbar/Navbar";
import supabase from "../../services/supabaseClient";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import ProductTabs from "../../components/producttabs/ProductTabs";
import ProductsRelated from "../../components/relatedproducts/ProductsRelated";
import FeaturesBar from "../../components/featuresBar/FeaturesBar";

function DetailProduct() {
  const { id } = useParams();
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("Products")
        .select("*")
        .eq("id", Number(id))
        .single();

      if (error) {
        console.error("Error cargando producto:", error);
        return;
      }

      // CONVERTIR images/0, images/1, images/2 en un array
      const imagesArray = [
        data["images/0"],
        data["images/1"],
        data["images/2"],
        data["images/3"],
      ].filter(Boolean); // elimina nulls

      // Convertir tags y colors
      const tagsArray = [
        data["tags/0"],
        data["tags/1"],
        data["tags/2"],
      ].filter(Boolean);

      const colorsArray = [
        data["colors/0"],
        data["colors/1"],
        data["colors/2"],
      ].filter(Boolean);

      // esto se cambia cuando esté el supabase de las reseñas
      const reviews = [];

      if (data["reviews/0/user"]) {
        reviews.push({
          user: data["reviews/0/user"],
          comment: data["reviews/0/comment"],
          rating: data["reviews/0/rating"],
        });
      }

      if (data["reviews/1/user"]) {
        reviews.push({
          user: data["reviews/1/user"],
          comment: data["reviews/1/comment"],
          rating: data["reviews/1/rating"],
        });
      }

      if (data["reviews/2/user"]) {
        reviews.push({
          user: data["reviews/2/user"],
          comment: data["reviews/2/comment"],
          rating: data["reviews/2/rating"],
        });
      }

      //Guardamos el producto con los arrays
      setItem({
        ...data,
        images: imagesArray,
        tags: tagsArray,
        colors: colorsArray,
        reviews: reviews,
      });

      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!item) return <div>Producto no encontrado</div>;

  return (
    <div>
      <Navbar />
      <BarBlack />

      <ProductDetail
        id={item.id}
        name={item.name}
        images={item.images}
        description={item.description || ""}
        detail={item.detail || ""}
        price={item.price}
        sku={item.sku}
        category={item.category}
        tags={item.tags}
        colors={item.colors}
      />

      <ProductTabs
        productId={item.id}
        description={item.description || ""}
        reviews={item.reviews}
        images={item.images}
      />

      <ProductsRelated />
      <FeaturesBar />
      <Footer />
    </div>
  );
}

export default DetailProduct;
