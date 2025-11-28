import React from "react";
import { NavLink } from "react-router-dom";
// Componente de categorías
function Categories() {
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
          
          {/* Peripherals */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <NavLink to="/Peripherals">
                <img
                  src="/img/GamingMouse.jpg"
                  alt="Gaming mouse"
                  className="w-full h-120 object-cover"
                />
              </NavLink>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Peripherals and accessories
            </h3>
          </div>

          {/* PCs and Smartphones */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <NavLink to="/Devices">
                <img
                  src="/img/Setup.jpg"
                  alt="RGB setup"
                  className="w-full h-120 object-cover"
                />
              </NavLink>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              PCs and smartphones
            </h3>
          </div>

          {/* Gaming */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <NavLink to="/Gaming">
                <img
                  src="/img/PS5Futu.jpg"
                  alt="PlayStation console"
                  className="w-full h-120 object-cover"
                />
              </NavLink>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Gaming
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Categories;
