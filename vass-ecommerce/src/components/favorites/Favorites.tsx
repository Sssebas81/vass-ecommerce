import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";
import { toggleLike } from "../../features/likes/LikesSlice";

function Favorites() {
  const dispatch = useDispatch();
  const likedItems = useSelector((state: RootState) => state.likes.items);

  if (likedItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-600">
        <h2 className="text-2xl font-semibold mb-2">No favorites yet </h2>
        <p className="text-gray-500">Go back and like some products!</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Your Favorites
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {likedItems.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden relative shadow hover:shadow-md transition-all cursor-pointer"
            >
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
                <p className="text-gray-900 font-bold mt-1">{product.price}</p>
              </div>

              {/* Botón quitar like */}
              <div className="absolute top-3 right-3">
                <button
                  onClick={() => dispatch(toggleLike(product))}
                  className="text-red-500 hover:text-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="red"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.016-4.5-4.5-4.5-1.74 0-3.255.992-4.05 2.43A4.497 4.497 0 0 0 8.4 3.75C5.915 3.75 3.9 5.765 3.9 8.25c0 7.003 8.1 11.25 8.1 11.25s8.1-4.247 8.1-11.25Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Favorites;
