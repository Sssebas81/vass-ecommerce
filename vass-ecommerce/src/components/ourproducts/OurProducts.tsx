import products from "../../data/product.json"
function OurProducts() {
  
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Products
        </h2>

        {/* Grid de productos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-lg overflow-hidden relative shadow hover:shadow-md transition-all"
            >
              {/* Etiqueta de descuento */}
              {product.discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
                  {product.discount}
                </span>
              )}

              {/* Imagen */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-contain p-4"
              />

              {/* Info */}
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.brand}
                </h3>
                <p className="text-sm text-gray-500">{product.name}</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-gray-900 font-bold">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón See More */}
        <div className="flex justify-center mt-12">
          <button className="border border-black px-6 py-2 rounded-md text-black hover:bg-black hover:text-white transition-all">
            See more
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;