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
                    <div className="hidden md:flex space-x-6 ">
                        {/* User */}
                        <div className="flex-shrink-0 text-2xl font-bold text-black ml-30">
                            <img src="/img/Persona.svg" alt="Logo Persona" className="w-6 h-6" />
                        </div>


                        {/* Search */}

                        <div className="flex-shrink-0 text-2xl font-bold text-black ml-[-90px]">
                            <img src="/img/Lupa.svg" alt="Logo Lupa" className="w-6 h-6" />
                        </div>

                        {/* Heart */}

                        <div className="flex-shrink-0 text-2xl font-bold text-black ml-[-90px]">
                            <img src="/img/Corazon.png" alt="Logo Corazon" className="w-6 h-6" />
                        </div>

                        {/* Cart */}

                        <div className="flex-shrink-0 text-2xl font-bold text-black ml-[-90px]">
                            <img src="/img/Carrito.png" alt="Logo Carrito" className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
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
