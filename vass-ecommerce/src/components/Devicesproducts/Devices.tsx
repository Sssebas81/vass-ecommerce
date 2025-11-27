import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/CartSlice";
import { toggleLike } from "../../features/likes/LikesSlice";
import type { RootState } from "../../app/store";
import { useEffect, useState } from "react";
import supabase from "../../services/supabaseClient";

function DevicesProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likedProducts = useSelector((state: RootState) => state.likes.items);

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("Products")
        .select("*")
        .gte("id", 41)
        .lte("id", 56);

      if (error) {
        console.error("Error fetching devices:", error);
        return;
      }

      // Convertir estructura plana del Excel → formato usable
      const parsed = data.map((p) => ({
        ...p,
        images: [
          p["images/0"],
          p["images/1"],
          p["images/2"],
          p["images/3"],
        ].filter(Boolean),
        tags: [
          p["tags/0"],
          p["tags/1"],
          p["tags/2"],
        ].filter(Boolean),
        colors: [
          p["colors/0"],
          p["colors/1"],
          p["colors/2"],
        ].filter(Boolean),
      }));

      setProducts(parsed);
    };

    fetchProducts();
  }, []);

  const isLiked = (id: number) =>
    likedProducts.some((product) => product.id === id);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden relative shadow hover:shadow-md transition-all cursor-pointer"
              onClick={() =>
                navigate("/product/" + product.id, { state: product.id })
              }
            >
              {/* Etiqueta de descuento */}
              {product.discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-full z-10">
                  {product.discount}
                </span>
              )}

              {/* Imagen */}
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="w-full h-56 object-contain p-4"
              />

              {/* Contenido */}
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.brand}
                </h3>
                <p className="text-sm text-gray-500">{product.name}</p>
                <p className="text-gray-900 font-bold mt-1">
                  {product.price}
                </p>
              </div>

              {/* Hover Layer */}
              <div className="absolute inset-0 bg-[#000000aa] hidden group-hover:flex flex-col items-center justify-center gap-4 transition-opacity cursor-pointer">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const numericPrice = Number(
                      String(product.price).replace(/[^\d.-]/g, "")
                    );
                    dispatch(
                      addToCart({
                        ...product,
                        price: numericPrice,
                        displayPrice: product.price,
                        quantity: 1,
                      })
                    );
                  }}
                  className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition z-20 cursor-pointer"
                >
                  Add to cart
                </button>

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(toggleLike(product));
                  }}
                  className="flex items-center gap-2 text-white text-sm cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={isLiked(product.id) ? "red" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke={isLiked(product.id) ? "red" : "currentColor"}
                    className="w-5 h-5 transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.016-4.5-4.5-4.5-1.74 0-3.255.992-4.05 2.43A4.497 4.497 0 0 0 8.4 3.75C5.915 3.75 3.9 5.765 3.9 8.25c0 7.003 8.1 11.25 8.1 11.25s8.1-4.247 8.1-11.25Z"
                    />
                  </svg>
                  <span>{isLiked(product.id) ? "Liked" : "Like"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón See More */}
        <div className="flex justify-center mt-12">
          <NavLink to="/Shop">
            <button className="border border-black px-6 py-2 rounded-md text-black hover:bg-black hover:text-white transition-all">
              See more
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default DevicesProducts;
