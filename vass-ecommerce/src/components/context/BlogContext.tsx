import { createContext, useContext, useState, useEffect } from "react";
// Definición de la interfaz para un post del blog
export interface BlogPost {
  title: string;
  price: string;
  category: string;
  condition: string;
  description:string;
  images: string[];
}
// Definición de la interfaz para el contexto del blog
export interface BlogContextType {
  posts: BlogPost[];
  initialCount: number;
  addPost: (post: BlogPost) => void;
  editPost: (index: number, updated: BlogPost) => void;
  deletePost: (index: number) => void;
}
// Crear el contexto del blog
const BlogContext = createContext<BlogContextType | null>(null);

const initialPosts: BlogPost[] = [
  {
    title: "Logitech G Pro X Wireless Headset",
    price: "120.000",
    category: "Peripherals",
    condition: "New",
    description:"The Logitech G Pro X Wireless Headset delivers professional-grade audio performance tailored for competitive gaming. Powered by LIGHTSPEED wireless technology, it ensures a fast, stable connection with up to 20 hours of battery life. Its PRO-G 50 mm drivers provide immersive DTS:X surround sound, enhancing clarity and precision in every match. The detachable microphone features Blue VO!CE filters, offering broadcast-quality voice communication. With a durable yet comfortable design, this headset combines freedom of movement with uncompromising sound quality for serious players.",
    images: ["/img/DiademaBlog.jpg"],
  },
  {
    title: "Razer Huntsman V2 Optical Keyboard",
    price: "80.000",
    category: "Gaming",
    condition: "Used - Like new",
    description:"It features Razer Optical Switches, which deliver ultra-fast actuation with near-zero input latency, making it ideal for competitive esports. With a polling rate of 8000 Hz, every keystroke is registered almost instantly, ensuring maximum responsiveness. The keyboard includes doubleshot PBT keycaps for long-lasting durability, dedicated media controls with a multifunctional dial, and a plush wrist rest for comfort during extended sessions. Enhanced with Razer Chroma RGB lighting, the Huntsman V2 combines cutting-edge technology, ergonomic design, and immersive aesthetics to provide gamers with a superior typing and gaming experience",
    images: ["/img/TecladoBlog.jpg"],
  },
];
// Proveedor del contexto del blog
export function BlogProvider({ children }: { children: React.ReactNode }) {
  // Carga inicial: posts base + posts guardados
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem("blog_posts");

    if (saved) {
      const userPosts = JSON.parse(saved);
      return [...initialPosts, ...userPosts];
    }

    return initialPosts;
  });

  // Guardar solo los posts nuevos
  useEffect(() => {
    const userPosts = posts.slice(initialPosts.length);
    localStorage.setItem("blog_posts", JSON.stringify(userPosts));
  }, [posts]);

  // Agregar post
  const addPost = (post: BlogPost) => {
    setPosts(prev => [...prev, post]);
  };

  // Editar post
  const editPost = (index: number, updatedPost: BlogPost) => {
    setPosts(prev => {
      const copy = [...prev];
      copy[index] = updatedPost;
      return copy;
    });
  };

  // Eliminar post
  const deletePost = (index: number) => {
    setPosts(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, editPost, deletePost, initialCount: initialPosts.length }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const ctx = useContext(BlogContext);
  if (!ctx) throw new Error("useBlog must be inside BlogProvider");
  return ctx;
}
