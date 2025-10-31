import React from "react";

function OurProducts() {
  const products = [
    {
      id: 1,
      brand: "Nintendo",
      name: "Super Smash Bros",
      price: "138.538 COP",
      oldPrice: "197.900 COP",
      discount: "-30%",
      image: "/img/smashbros.jpg",
    },
    {
      id: 2,
      brand: "Logitech",
      name: "K380 Pebble",
      price: "189.900 COP",
      oldPrice: "",
      discount: "",
      image: "/img/Logitech1.png",
    },
    {
      id: 3,
      brand: "Xbox",
      name: "Inalámbrico Carbon Black",
      price: "279.900 COP",
      oldPrice: "",
      discount: "",
      image: "/img/ControlXbox.png",
    },
    {
      id: 4,
      brand: "Nintendo",
      name: "Pro Controller original",
      price: "309.900 COP",
      oldPrice: "",
      discount: "",
      image: "/img/ControlSwitch.png",
    },
    {
      id: 5,
      brand: "JBL",
      name: "TUNE500",
      price: "120.400 COP",
      oldPrice: "",
      discount: "",
      image: "/img/AudifonosJBL.png",
    },
    {
      id: 6,
      brand: "Nintendo",
      name: "Nintendo Switch 2",
      price: "2.859.900 COP",
      oldPrice: "",
      discount: "",
      image: "/img/NintendoSwitch2.png",
    },
    {
      id: 7,
      brand: "Sony",
      name: "PlayStation 5",
      price: "1.749.950 COP",
      oldPrice: "3.799.900 COP",
      discount: "-50%",
      image: "/img/Play5Products.png",
    },
    {
      id: 8,
      brand: "Rockstar Games",
      name: "Grand Theft Auto V",
      price: "140.406 COP",
      oldPrice: "",
      discount: "",
      image: "/img/GTA5.png",
    },
  ];

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
          <button className="border border-gray-800 px-6 py-2 rounded-md text-gray-800 hover:bg-gray-800 hover:text-white transition-all">
            See more
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
