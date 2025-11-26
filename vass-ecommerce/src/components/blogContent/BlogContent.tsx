import { NavLink } from "react-router-dom";
import { useBlog } from "../context/BlogContext";

export default function BlogContent() {
  const { posts } = useBlog(); // 👈 traer posts reales

  const recentPosts = [
    { id: 1, img: "/img/PS5Blog.jpg", title: "PlayStation 5 Slim: Next-Gen Power", date: "18 Sep 2025" },
    { id: 2, img: "/img/TecladolucesBlog.jpg", title: "RGB Mechanical Keyboard: Style & Speed", date: "10 Aug 2025" },
    { id: 3, img: "/img/IphoneBlog.jpg", title: "iPhone 15 Pro Max: Mobile Gaming Beast", date: "9 Sep 2025" },
    { id: 4, img: "/img/AudifonosBlog.jpg", title: "Wireless Gaming Headset: Total Immersion", date: "3 Aug 2025" },
    { id: 5, img: "/img/CompuBlog.jpg", title: "4K Curved Monitor: Gaming Redefined", date: "25 Jul 2025" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* POSTS DINÁMICOS */}
      <div className="lg:col-span-2 space-y-16">

        {posts.length === 0 && (
          <p className="text-gray-500">No posts yet. Publish something in Sell!</p>
        )}

        {posts.map((post, index) => (
          <article key={index}>
            <img
              src={post.images[0]}
              alt={post.title}
              className="w-full rounded-lg mb-6 shadow-lg"
            />

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

            <a href="#" className="text-blue-600 font-medium hover:underline text-sm">
              Read more
            </a>
          </article>
        ))}

      </div>

      {/* SIDEBAR */}
      <aside className="space-y-8">
        <div className="space-y-2">
          <NavLink to="/sell">
            <button className="w-full border border-gray-300 text-gray-700 rounded-full px-5 py-2 text-sm hover:border-black transition">
              Sell
            </button>
          </NavLink>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-6 text-gray-400 text-sm">
            <li className="hover:text-black cursor-pointer">Gaming</li>
            <li className="hover:text-black cursor-pointer">Smartphones</li>
            <li className="hover:text-black cursor-pointer">PC & Hardware</li>
            <li className="hover:text-black cursor-pointer">Consoles</li>
            <li className="hover:text-black cursor-pointer">Accessories</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
          <ul className="space-y-4">
            {recentPosts.map((r) => (
              <li key={r.id} className="flex items-center gap-3">
                <img src={r.img} alt={r.title} className="w-14 h-14 object-cover rounded-md" />
                <div>
                  <p className="text-sm font-medium text-gray-800 leading-tight">{r.title}</p>
                  <span className="text-xs text-gray-500">{r.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

    </section>
  );
}
