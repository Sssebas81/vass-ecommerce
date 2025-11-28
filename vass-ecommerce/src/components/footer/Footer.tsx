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
            
            <NavLink to="/Home">
            <li className="hover:text-gray-600 cursor-pointer">Home</li>
            </NavLink>
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
        <div className="flex items-center gap-4 justify-start md:justify-end">
          <img
            src="/img/VisualStudio.png"
            alt="Visual Studio logo"
            className="h-12 w-auto opacity-80 hover:opacity-100 transition-all duration-200"
          />
          <img
            src="/img/GitHub.png"
            alt="GitHub logo"
            className="h-12 w-auto opacity-80 hover:opacity-100 transition-all duration-200"
          />
          <img
            src="/img/git.webp"
            alt="Git logo"
            className="h-14 w-auto opacity-80 hover:opacity-100 transition-all duration-200"
          />
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