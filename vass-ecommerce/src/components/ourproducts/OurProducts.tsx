import { NavLink } from "react-router-dom";

function OurProducts() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Products
        </h2>

        {/* GRID DE PRODUCTOS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* ---------- PRODUCTO 1 ---------- */}
          <NavLink to="/Product1">
            <div className="bg-gray-50 rounded-lg overflow-hidden relative shadow hover:shadow-md transition-all hover:scale-105 duration-300">
              <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
                -30%
              </span>
              <img
                src="/img/smashbros.jpg"
                alt="Super Smash Bros"
                className="w-full h-56 object-contain p-4"
              />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Nintendo</h3>
                <p className="text-sm text-gray-500">Super Smash Bros</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-gray-900 font-bold">138.538 COP</span>
                  <span className="text-gray-400 line-through text-sm">197.900 COP</span>
                </div>
              </div>
            </div>
          </NavLink>

          {/* ---------- PRODUCTO 2 ---------- */}
          <NavLink to="/Product2">
            <div className="bg-gray-50 rounded-lg overflow-hidden relative shadow hover:shadow-md transition-all hover:scale-105 duration-300">
              <img
                src="/img/Logitech1.png"
                alt="Logitech K380 Pebble"
                className="w-full h-56 object-contain p-4"
              />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Logitech</h3>
                <p className="text-sm text-gray-500">K380 Pebble</p>
                <span className="text-gray-900 font-bold">189.900 COP</span>
              </div>
            </div>
          </NavLink>

          {/* ---------- PRODUCTO 3 ---------- */}
          <NavLink to="/Product3">
            <div className="bg-gray-50 rounded-lg overflow-hidden relative shadow hover:shadow-md transition-all hover:scale-105 duration-300">
              <img
                src="/img/ControlXbox.png"
                alt="Xbox Controller Carbon Black"
                className="w-full h-56 object-contain p-4"
              />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Xbox</h3>
                <p className="text-sm text-gray-500">Inalámbrico Carbon Black</p>
                <span className="text-gray-900 font-bold">279.900 COP</span>
              </div>
            </div>
          </NavLink>

          {/* ---------- PRODUCTO 4 ---------- */}
          <NavLink to="/Product4">
            <div className="bg-gray-50 rounded-lg overflow-hidden relative shadow hover:shadow-md transition-all hover:scale-105 duration-300">
              <img
                src="/img/ControlNintendo.png"
                alt="Pro Controller original"
                className="w-full h-56 object-contain p-4"
              />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Nintendo</h3>
                <p className="text-sm text-gray-500">Pro Controller original</p>
                <span className="text-gray-900 font-bold">309.900 COP</span>
              </div>
            </div>
          </NavLink>

          {/* ---------- PRODUCTO 5 ---------- */}
          <NavLink to="/Product5">
            <div className="bg-gray-50 rounded-lg overflow-hidden relative shadow hover:shadow-md transition-all hover:scale-105 duration-300">
              <img
                src="/img/AudifonosJBL.png"
                alt="JBL Headphones TUNE500"
                className="w-full h-56 object-contain p-4"
              />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">JBL</h3>
                <p className="text-sm text-gray-500">TUNE500</p>
                <span className="text-gray-900 font-bold">120.400 COP</span>
              </div>
            </div>
          </NavLink>

          {/* ---------- PRODUCTO 6 ---------- */}
          <NavLink to="/Product6">
            <div className="bg-gray-50 rounded-lg overflow-hidden relative shadow hover:shadow-md transition-all hover:scale-105 duration-300">
              <span className="absolute top-2 right-2 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
                -50%
              </span>
              <img
                src="/img/Play5Products.png"
                alt="PlayStation 5"
                className="w-full h-56 object-contain p-4"
              />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Sony</h3>
                <p className="text-sm text-gray-500">PlayStation 5</p>
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-gray-900 font-bold">1.749.950 COP</span>
                  <span className="text-gray-400 line-through text-sm">3.799.900 COP</span>
                </div>
              </div>
            </div>
          </NavLink>

          {/* ---------- PRODUCTO 7 ---------- */}
          <NavLink to="/Product7">
            <div className="bg-gray-50 rounded-lg overflow-hidden relative shadow hover:shadow-md transition-all hover:scale-105 duration-300">
              <img
                src="/img/NintendoSwitch2.png"
                alt="Nintendo Switch 2"
                className="w-full h-56 object-contain p-4"
              />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Nintendo</h3>
                <p className="text-sm text-gray-500">Nintendo Switch 2</p>
                <span className="text-gray-900 font-bold">2.859.900 COP</span>
              </div>
            </div>
          </NavLink>

          {/* ---------- PRODUCTO 8 ---------- */}
          <NavLink to="/Product8">
            <div className="bg-gray-50 rounded-lg overflow-hidden relative shadow hover:shadow-md transition-all hover:scale-105 duration-300">
              <img
                src="/img/GTA5.png"
                alt="Grand Theft Auto V"
                className="w-full h-56 object-contain p-4"
              />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Rockstar Games</h3>
                <p className="text-sm text-gray-500">Grand Theft Auto V</p>
                <span className="text-gray-900 font-bold">140.406 COP</span>
              </div>
            </div>
          </NavLink>

        </div>

        {/* BOTÓN SEE MORE */}
        <div className="flex justify-center mt-12">
          <NavLink to="/Shop">
            <button className="border border-black px-6 py-2 rounded-md text-black hover:bg-black hover:text-white transition-all">
              See more
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
