import React from "react";

function Categories() {
  const categories = [
    {
      id: 1,
      image: "/img/GamingMouse.jpg",
      alt: "Gaming mouse",
      title: "Peripherals and accessories",
    },
    {
      id: 2,
      image: "/img/Setup.jpg",
      alt: "RGB setup",
      title: "PCs and smartphones",
    },
    {
      id: 3,
      image: "/img/PS5Futu.jpg",
      alt: "PlayStation console",
      title: "Gaming",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Explore by category
        </h2>
        <p className="text-gray-600 mb-10 text-center">
          Find what you need for your space.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {categories.map((product) => (
            <div key={product.id}>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-120 object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
