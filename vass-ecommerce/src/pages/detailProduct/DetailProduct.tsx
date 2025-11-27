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

      setItem(data);
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
        images={item.images || []}
        description={item.description || ""}
        detail={item.detail || ""}
        price={item.price}
        sku={item.sku}
        category={item.category}
        tags={item.tags || []}
        colors={item.colors || []}
      />

      <ProductTabs
        productId={item.id}
        description={item.description || ""}
        reviews={item.reviews || []}
        images={item.images || []}
      />

      <ProductsRelated />
      <FeaturesBar />
      <Footer />
    </div>
  );
}

export default DetailProduct;
