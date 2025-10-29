import { NavLink } from "react-router-dom";

function AllProducts() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

          {/* Product 1 */}
          <NavLink to="/product1">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/HyperxAudifonos.png" alt="HyperX" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">HyperX</h3>
                <p className="text-sm text-gray-500">Cloud Stinger 2 Audífonos</p>
                <p className="text-gray-900 font-bold mt-1">320.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 2 */}
          <NavLink to="/product2">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/SanDisk.jpg" alt="SanDisk" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">SanDisk</h3>
                <p className="text-sm text-gray-500">Ultra Flair 128GB USB</p>
                <p className="text-gray-900 font-bold mt-1">90.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 3 */}
          <NavLink to="/product3">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/HPForroPortatil.png" alt="HP" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">HP</h3>
                <p className="text-sm text-gray-500">Forro para portátil 15.6"</p>
                <p className="text-gray-900 font-bold mt-1">95.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 4 */}
          <NavLink to="/product4">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/CoolerMasterBase.png" alt="Cooler Master" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Cooler Master</h3>
                <p className="text-sm text-gray-500">Base refrigerante para laptop</p>
                <p className="text-gray-900 font-bold mt-1">120.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 5 */}
          <NavLink to="/product5">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/corsair.jpg" alt="Corsair" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Corsair</h3>
                <p className="text-sm text-gray-500">Teclado mecánico K60 RGB</p>
                <p className="text-gray-900 font-bold mt-1">320.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 6 */}
          <NavLink to="/product6">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/xbox-headset.jpg" alt="Microsoft" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Microsoft</h3>
                <p className="text-sm text-gray-500">Headset Xbox Stereo</p>
                <p className="text-gray-900 font-bold mt-1">285.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 7 */}
          <NavLink to="/product7">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/gt7.jpg" alt="PlayStation" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">PlayStation</h3>
                <p className="text-sm text-gray-500">Gran Turismo 7 PS5</p>
                <p className="text-gray-900 font-bold mt-1">270.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 8 */}
          <NavLink to="/product8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/nintendo-case.jpg" alt="Nintendo" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Nintendo</h3>
                <p className="text-sm text-gray-500">Funda rígida para Switch</p>
                <p className="text-gray-900 font-bold mt-1">110.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 9 */}
          <NavLink to="/product9">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/seagate.jpg" alt="Seagate" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Seagate</h3>
                <p className="text-sm text-gray-500">Disco duro externo 2TB</p>
                <p className="text-gray-900 font-bold mt-1">310.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 10 */}
          <NavLink to="/product10">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/hyperx-mic.jpg" alt="HyperX Mic" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">HyperX</h3>
                <p className="text-sm text-gray-500">Micrófono QuadCast S</p>
                <p className="text-gray-900 font-bold mt-1">680.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 11 */}
          <NavLink to="/product11">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/hp-printer.jpg" alt="HP Impresora" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">HP</h3>
                <p className="text-sm text-gray-500">Impresora DeskJet 2775</p>
                <p className="text-gray-900 font-bold mt-1">430.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 12 */}
          <NavLink to="/product12">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/steelseries.jpg" alt="SteelSeries" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">SteelSeries</h3>
                <p className="text-sm text-gray-500">Mousepad Qck+</p>
                <p className="text-gray-900 font-bold mt-1">95.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 13 */}
          <NavLink to="/product13">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/spiderman2.jpg" alt="PlayStation" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">PlayStation</h3>
                <p className="text-sm text-gray-500">Spider-Man 2 PS5</p>
                <p className="text-gray-900 font-bold mt-1">280.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 14 */}
          <NavLink to="/product14">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/samsung-ssd.jpg" alt="Samsung SSD" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Samsung</h3>
                <p className="text-sm text-gray-500">SSD portátil T7 500GB</p>
                <p className="text-gray-900 font-bold mt-1">410.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 15 */}
          <NavLink to="/product15">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/canon-scanner.jpg" alt="Canon" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Canon</h3>
                <p className="text-sm text-gray-500">Escáner Lide 300</p>
                <p className="text-gray-900 font-bold mt-1">410.000 COP</p>
              </div>
            </div>
          </NavLink>

          {/* Product 16 */}
          <NavLink to="/product16">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition-all cursor-pointer">
              <img src="/img/nintendo-classic.jpg" alt="Nintendo Classic" className="w-full h-56 object-contain p-4" />
              <div className="px-4 pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Nintendo</h3>
                <p className="text-sm text-gray-500">Super NES Classic Edition</p>
                <p className="text-gray-900 font-bold mt-1">550.000 COP</p>
              </div>
            </div>
          </NavLink>

        </div>
      </div>
    </section>
  );
}

export default AllProducts;
