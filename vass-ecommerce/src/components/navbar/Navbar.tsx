import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-black ml-[-90px]">
            <img src="/img/LogoVass.svg" alt="VASS Logo" className="h-10 w-auto" />
          </div>

          {/* Links (desktop) */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">Shop</a>
            <a href="#" className="hover:text-black">Blog</a>
            <a href="#" className="hover:text-black">Contact</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex space-x-6">
            {/* User */}
            <button>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1119.07 8.73a9 9 0 01-13.95 9.074zM12 14a4 4 0 100-8 4 4 0 000 8z"/>
              </svg>
            </button>

            {/* Search */}
            <button>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/>
              </svg>
            </button>

            {/* Heart */}
            <button>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 13.5 4 8a4 4 0 118-0 4 4 0 118 0c0 5.5-8 13-8 13z"/>
              </svg>
            </button>

            {/* Cart */}
            <button>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.34 2M7 13h10l4-8H5.34M7 13L5.34 5M7 13l-2 9m12-9l2 9m-6-4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 font-medium">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">Shop</a>
          <a href="#" className="block">Blog</a>
          <a href="#" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
