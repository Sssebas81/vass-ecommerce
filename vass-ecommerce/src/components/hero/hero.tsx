import React, { useState } from "react";

function HeroPage() {
  const [image, setImage] = useState("https://source.unsplash.com/600x400/?technology,website");

  const changeImage = () => {
    const images = [
      "https://source.unsplash.com/600x400/?technology,website",
      "https://source.unsplash.com/600x400/?office,workspace",
      "https://source.unsplash.com/600x400/?teamwork,people",
      "https://source.unsplash.com/600x400/?startup,design",
    ];
    const random = Math.floor(Math.random() * images.length);
    setImage(images[random]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-8 py-4 shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-indigo-600">MiMarca</h1>
        <nav className="space-x-6">
          <a href="#features" className="text-gray-700 hover:text-indigo-600">Características</a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600">Nosotros</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex flex-1 items-center justify-center px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
          {/* Texto */}
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Bienvenido a <span className="text-indigo-600">MiMarca</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              La mejor solución para gestionar tus proyectos de manera sencilla, rápida y profesional.
            </p>
            <div className="flex gap-4">
              <button
                onClick={changeImage}
                className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition"
              >
                Cambiar imagen
              </button>
            </div>
          </div>

          {/* Imagen con useState */}
          <div className="flex justify-center">
            <img
              src={image}
              alt="Hero"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroPage