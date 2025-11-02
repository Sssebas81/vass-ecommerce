import { useNavigate } from "react-router-dom";
import products from "../../data/product.json";

function AllProducts() {
  const navigate = useNavigate();

  // Filtrar los productos del 9 al 24
  const shopProducts = products.filter((p) => p.id >= 9 && p.id <= 24);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {shopProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-lg overflow-hidden relative shadow hover:shadow-md transition-all cursor-pointer"
              onClick={() => navigate("/product/" + product.id, { state: product.id })
              }
            >
              {product.discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
                  {product.discount}
                </span>
              )}
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-56 object-contain p-4"
              />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.brand}
                </h3>
                <p className="text-sm text-gray-500">{product.name}</p>
                <p className="text-gray-900 font-bold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
