import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <NavLink to="/">
            <div className="flex-shrink-0">
              <img src="/img/LogoVass.svg" alt="VASS Logo" className="h-10 w-auto" />
            </div>
          </NavLink>
          
          {/* Links (desktop) */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <NavLink to="/" className="hover:text-black">Home</NavLink>
            <NavLink to="/Shop" className="hover:text-black">Shop</NavLink>
            <NavLink to="/Blog" className="hover:text-black">Blog</NavLink>
            <NavLink to="/Contact" className="hover:text-black">Contact</NavLink>
          </div>

          {/* Icons + Login (desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <img src="/img/Lupa.svg" alt="Search" className="w-6 h-6 cursor-pointer" />
            <NavLink to="/Favorites">
              <img src="/img/Corazon.png" alt="Heart" className="w-6 h-6 cursor-pointer" />
            </NavLink>
            <NavLink to="/Cart">
              <img src="/img/Carrito.png" alt="Cart" className="w-6 h-6 cursor-pointer" />
            </NavLink>
            <NavLink to="/Profile">
              <img src="/img/Persona.svg" alt="User" className="w-6 h-6 cursor-pointer" />
            </NavLink>

            {/* Login Button */}
            <NavLink to="/Login">
              <button className="ml-2 px-4 py-2 border border-gray-800 rounded-2xl text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition duration-200">
                Log in
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-3 font-medium text-gray-700">
          <NavLink to="/" className="block hover:text-black">Home</NavLink>
          <NavLink to="/Shop" className="block hover:text-black">Shop</NavLink>
          <NavLink to="/Blog" className="block hover:text-black">Blog</NavLink>
          <NavLink to="/Contact" className="block hover:text-black">Contact</NavLink>

          {/* Mobile icons */}
          <div className="flex space-x-6 pt-4 border-t border-gray-200 items-center">
            <img src="/img/Persona.svg" alt="User" className="w-6 h-6 cursor-pointer" />
            <img src="/img/Lupa.svg" alt="Search" className="w-6 h-6 cursor-pointer" />
            <img src="/img/Corazon.png" alt="Heart" className="w-6 h-6 cursor-pointer" />
            <img src="/img/Carrito.png" alt="Cart" className="w-6 h-6 cursor-pointer" />

            {/* Login button (mobile) */}
            <NavLink to="/Login">
              <button className="ml-2 px-3 py-1 border border-gray-800 rounded-md text-gray-800 font-medium hover:bg-gray-800 hover:text-white transition duration-200">
                Log in
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
