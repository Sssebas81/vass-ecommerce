import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useBlog } from "../context/BlogContext";
import EditPostModal from "../editpostmodal/EditPostModal";
import supabase from "../../services/supabaseClient";

// Tipos mínimos para productos del Supabase
type Product = {
  id: number;
  name: string;
  price: number;
  ["images/0"]?: string | null;
  images?: string[];
};
// Componente principal para mostrar el contenido del blog
export default function BlogContent() {
  const { posts, deletePost, initialCount, editPost } = useBlog();
  const [editingPost, setEditingPost] = useState<any | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  // FETCH RANDOM PRODUCTS
  useEffect(() => {
    const fetchRandom = async () => {
      const { data, error } = await supabase.from("Products").select("*");

      if (error) {
        console.error("Error loading products:", error);
        return;
      }
      if (!data) return;

      // Convertir imágenes "images/0" en un array real
      const cleaned = data.map((p: any) => ({
        ...p,
        images: [
          p["images/0"],
        ].filter(Boolean),
      }));

      // Mezclar y tomar 5
      const shuffled = cleaned.sort(() => Math.random() - 0.5).slice(0, 5);
      setRandomProducts(shuffled);
    };

    fetchRandom();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* POSTS DINÁMICOS */}
      <div className="lg:col-span-2 space-y-16">
        {posts.length === 0 && (
          <p className="text-gray-500">No posts yet. Publish something in Sell!</p>
        )}

        {posts.map((post, index) => {
          const isUserPost = index >= initialCount;

          return (
            <article key={index}>
              {/* IMAGEN DEL POST */}
              <img
                src={post.images[0]}
                alt={post.title}
                className="w-full rounded-lg mb-6 shadow-lg"
              />

              {/* Info */}
              <div className="text-sm text-gray-500 flex items-center gap-6 mb-3">
                <span className="flex items-center gap-1">
                  <img src="/img/UserBlog.png" alt="user" className="w-4 h-4" /> User
                </span>
                <span className="flex items-center gap-1">
                  <img src="/img/CalendarioBlog.png" alt="calendar" className="w-4 h-4" />
                  {new Date().toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <img src="/img/EtiquetaBlog.png" alt="tag" className="w-4 h-4" />
                  {post.category}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                Condition: {post.condition} — Price: ${post.price}
              </p>

              <p className="text-gray-600 text-sm mb-4">
                {post.description}
              </p>

              {/* BOTONES SOLO PARA POSTS DEL USUARIO */}
              {isUserPost && (
                <div className="flex gap-4 mt-4">

                  {/* EDIT POST */}
                  <button
                    onClick={() => {
                      setEditingPost(post);
                      setEditingIndex(index);
                    }}
                    className="px-4 py-2 text-sm rounded-md bg-cyan-500 text-white hover:bg-white hover:text-cyan-500 border transition"
                  >
                    Edit
                  </button>

                  {/* DELETE POST */}
                  <button
                    onClick={() => deletePost(index)}
                    className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-white hover:text-red-500 hover:border-red-500 border transition"
                  >
                    Delete
                  </button>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* SIDEBAR */}
      <aside className="space-y-8">

        <div className="space-y-2">
          <NavLink to="/sell">
            <button className="w-full border border-black text-black rounded-full px-5 py-2 text-sm hover:bg-black hover:text-white transition">
              Sell
            </button>
          </NavLink>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Other Posts</h3>

          <ul className="space-y-4">
            {randomProducts.map((prod) => (
              <li
                key={prod.id}
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => navigate(`/product/${prod.id}`)}
              >
                <img
                  src={prod.images?.[0] || "/img/placeholder.png"}
                  alt={prod.name}
                  className="w-14 h-14 object-cover rounded-md"
                />

                <div>
                  <p className="text-sm font-medium text-gray-800 leading-tight">
                    {prod.name}
                  </p>

                  <span className="text-xs text-gray-500">
                    ${prod.price}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* MODAL DE EDICIÓN */}
      {editingPost && (
        <EditPostModal
          post={editingPost}
          index={editingIndex!}
          onClose={() => {
            setEditingPost(null);
            setEditingIndex(null);
          }}
          onSave={(idx, updated) => {
            editPost(idx, updated);
            setEditingPost(null);
            setEditingIndex(null);
          }}
        />
      )}

    </section>
  );
}
