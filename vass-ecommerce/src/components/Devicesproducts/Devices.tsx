import { useNavigate } from "react-router-dom";
import products from "../../data/product.json";

function DevicesProducts() {
  const navigate = useNavigate();

  const shopProducts = products.filter((p) => p.id >= 25 && p.id <= 40);

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
              {/* Descuento */}
              {product.discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-full z-10">
                  {product.discount}
                </span>
              )}

              {/* Imagen */}
              <img
                src={product.images [0]}
                alt={product.name}
                className="w-full h-56 object-contain p-4"
              />

              {/* Información del producto */}
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.brand}
                </h3>
                <p className="text-sm text-gray-500">{product.name}</p>
                <p className="text-gray-900 font-bold mt-1">{product.price}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#000000aa] hidden transition-opacity group-hover:flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-5 z-20">
                  {/* Botón Add to cart */}
                  <button
                    className="bg-white text-black font-semibold px-6 py-2 rounded-md shadow-sm hover:bg-gray-100 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Add to cart
                  </button>

                  {/* Like */}
                  <div className="flex items-center gap-2 text-white text-base font-medium hover:opacity-80 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.016-4.5-4.5-4.5-1.74 0-3.255.992-4.05 2.43A4.497 4.497 0 0 0 8.4 3.75C5.915 3.75 3.9 5.765 3.9 8.25c0 7.003 8.1 11.25 8.1 11.25s8.1-4.247 8.1-11.25Z"
                      />
                    </svg>
                    <span>Like</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DevicesProducts;
