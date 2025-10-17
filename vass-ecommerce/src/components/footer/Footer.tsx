import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Columna 1: Logo e información */}
        <div>
          <img
            src="/img/LogoVass.svg"
            alt="VASS Logo"
            className="w-28 mb-3"
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            Where tech meets <br /> entertainment
          </p>
        </div>

        {/* Columna 2: Links */}
        <div>
          <h3 className="text-gray-500 text-sm font-semibold uppercase mb-4">
            Links
          </h3>
          <ul className="space-y-2 text-gray-800 text-sm">

            <li className="hover:text-gray-600 cursor-pointer">Home</li>
            <NavLink to="/Shop">
              <li className="hover:text-gray-600 cursor-pointer">Shop</li>
            </NavLink>
            <NavLink to ="/Blog">
              <li className="hover:text-gray-600 cursor-pointer">Blog</li>
            </NavLink>

            <NavLink to="/Contact">
            <li className="hover:text-gray-600 cursor-pointer">Contact</li>

            </NavLink>
          </ul>
        </div>

        {/* Columna 3: Help */}
        <div>
          <h3 className="text-gray-500 text-sm font-semibold uppercase mb-4">
            Help
          </h3>
          <ul className="space-y-2 text-gray-800 text-sm">
            <li className="hover:text-gray-600 cursor-pointer">Payment Options</li>
            <li className="hover:text-gray-600 cursor-pointer">Returns</li>
            <li className="hover:text-gray-600 cursor-pointer">Privacy Policies</li>
          </ul>
        </div>

        {/* Columna 4: Newsletter */}
        <div>
          <h3 className="text-gray-500 text-sm font-semibold uppercase mb-4">
            Newsletter
          </h3>
          <form className="flex border-b border-gray-300 pb-1">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400"
            />
            <button
              type="submit"
              className="text-sm font-semibold uppercase text-gray-800 hover:text-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-200 mt-6">
        <p className="text-center text-sm text-gray-600 py-6">
          © 2025 VASS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;