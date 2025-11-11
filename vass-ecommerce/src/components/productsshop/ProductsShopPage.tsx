import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/CartSlice";
import { toggleLike } from "../../features/likes/LikesSlice";
import type { RootState } from "../../app/store";
import products from "../../data/product.json";

function OurProducts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likedProducts = useSelector((state: RootState) => state.likes.items);

  const shopProducts = products.filter((p) => p.id >= 9 && p.id <= 24);

  const isLiked = (id: number) =>
    likedProducts.some((product) => product.id === id);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {shopProducts.map((product) => (
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
                src={product.images[0]}
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
                  {Number(String(product.price).replace(/[^\d.-]/g, "")).toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })}
                </p>
              </div>

              {/* Hover Layer */}
              <div className="absolute inset-0 bg-[#000000aa] hidden group-hover:flex flex-col items-center justify-center gap-4 transition-opacity cursor-pointer">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const numericPrice = Number(String(product.price).replace(/[^\d.-]/g, ""));
                    dispatch(addToCart({ ...product, price: numericPrice, quantity: 1 }));
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
      </div>
    </section>
  );
}

export default OurProducts;
