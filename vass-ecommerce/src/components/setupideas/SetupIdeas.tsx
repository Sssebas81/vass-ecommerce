import { useState } from "react";

const images = [
  "/img/Setup1.jpg",
  "/img/Setup2.jpeg",
  "/img/Setup3.jpg",
  "/img/Setup4.jpeg",
];

function SetupIdeas() {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
        
        {/* LEFT TEXT AREA - ORIGINAL */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Ideas to set up your space
          </h2>
          <p className="text-gray-300 mb-6">
            Explore combinations of products and styles to customize your setup.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
            See more
          </button>
        </div>

        {/* RIGHT CAROUSEL CON SOLO FLECHA A LA DERECHA */}
        <div className="flex-1 relative overflow-hidden rounded-xl shadow-lg">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="w-full flex-shrink-0 flex justify-center">
                <img
                  src={img}
                  className="w-[500px] h-[300px] object-cover rounded-xl"
                  alt={`Setup ${i + 1}`}
                />
              </div>
            ))}
          </div>

          {/* SOLO BOTÓN DE FLECHA DERECHA CON SVG */}
          <button
            onClick={siguiente}
            className="absolute right-2 top-1/2 -translate-y-1/2 hover:scale-110 transition"
          >
            <img src="/img/Flecha.svg" className="w-8 h-8" alt="Siguiente" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SetupIdeas;