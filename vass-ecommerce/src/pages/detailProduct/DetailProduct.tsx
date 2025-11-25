import { useLocation } from "react-router-dom";
import BarBlack from "../../components/BarBlack/BarBlack";
import ProductDetail from "../../components/DetailProduct/ProductDetail";
import Navbar from "../../components/navbar/Navbar";
import products from "../../data/product.json"
import { useEffect, useState } from "react";
import type { Product } from "../../type/type";
import Footer from "../../components/footer/Footer";
import ProductTabs from "../../components/producttabs/ProductTabs";
import ProductsRelated from "../../components/relatedproducts/ProductsRelated";
import FeaturesBar from "../../components/featuresBar/FeaturesBar";

function DetailProduct() {

  const location = useLocation()
  const [item, setitem] = useState<Product>()
  

  useEffect(() => {
    function getitem() {
      const itemid = location.state
      const itemfinded:any = products.find((jsonitem) => Number(jsonitem.id) === Number(itemid))
      setitem(itemfinded)


    }
    getitem()
  })

return (
  <div>
    <Navbar />
    <BarBlack />
    <ProductDetail
      name={item?.name || ""}
      images={item?.images || []}
      description={item?.description || ""}
      detail={item?.detail || ""}
      price={item?.price || ""}
      sku={item?.sku || ""}
      category={item?.category || ""}
      tags={item?.tags || []}
      colors={item?.colors || []}
    />

    {item && (
      <ProductTabs
        productId={item.id} 
        description={item.description}
        reviews={item.reviews || []}
        images={item.images || []}
      />
    )}

    <ProductsRelated />
    <FeaturesBar />
    <Footer />
  </div>
);
}

export default DetailProduct;
