import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import supabase from "../../services/supabaseClient";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();

  // Cargar productos desde la base de datos
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("Products")
        .select("id, name");

      if (error) {
        console.error("Error fetching products:", error);
        return;
      }

      setProducts(data);
    };

    fetchProducts();
  }, []);

  // Sugerencias SOLO de nombres
  const suggestions = products.map((p) => p.name);

  // Buscar producto al hacer submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const product = products.find(
      (p) => p.name.toLowerCase() === query.toLowerCase()
    );

    if (product) {
      navigate(`/product/${product.id}`);
    } else {
      alert("Product not found");
    }
  };

  return (
    <>
      {/* Remove datalist icon */}
      <style>
        {`
          input::-webkit-calendar-picker-indicator {
            display: none !important;
          }
        `}
      </style>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <NavLink to="/Home">
              <img src="/img/LogoVass.svg" alt="VASS Logo" className="h-10 w-auto" />
            </NavLink>

            {/* Links desktop */}
            <div className="hidden md:flex space-x-8 font-medium text-gray-700">
              <NavLink to="/Home" className="hover:text-black">Home</NavLink>
              <NavLink to="/Shop" className="hover:text-black">Shop</NavLink>
              <NavLink to="/Blog" className="hover:text-black">Blog</NavLink>
              <NavLink to="/Contact" className="hover:text-black">Contact</NavLink>
            </div>

            {/* Search + icons */}
            <div className="hidden md:flex items-center space-x-6">

              {/* Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  list="productSuggestions"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none"
                  placeholder="Search..."
                />

                <datalist id="productSuggestions">
                  {suggestions.map((s, i) => (
                    <option key={i} value={s} />
                  ))}
                </datalist>

                <button type="submit">
                  <img
                    src="/img/Lupa.svg"
                    className="w-5 h-5 absolute right-2 top-1 cursor-pointer"
                    alt="search"
                  />
                </button>
              </form>

              <NavLink to="/Favorites">
                <img src="/img/Corazon.png" className="w-6 h-6 cursor-pointer" />
              </NavLink>

              <NavLink to="/Cart">
                <img src="/img/Carrito.png" className="w-6 h-6 cursor-pointer" />
              </NavLink>

              <NavLink to="/Profile">
                <img src="/img/Persona.svg" className="w-6 h-6 cursor-pointer" />
              </NavLink>
            </div>

            {/* Mobile button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src="/img/Lupa.svg" className="w-6 h-6" />
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 pb-4 space-y-3 font-medium text-gray-700">
            <NavLink to="/Home" className="block hover:text-black">Home</NavLink>
            <NavLink to="/Shop" className="block hover:text-black">Shop</NavLink>
            <NavLink to="/Blog" className="block hover:text-black">Blog</NavLink>
            <NavLink to="/Contact" className="block hover:text-black">Contact</NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
