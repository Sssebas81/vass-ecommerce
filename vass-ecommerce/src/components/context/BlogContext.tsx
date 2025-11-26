import { createContext, useContext, useState, useEffect } from "react";

interface BlogPost {
  title: string;
  price: string;
  category: string;
  condition: string;
  images: string[];
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  editPost: (index: number, updated: BlogPost) => void;
  deletePost: (index: number) => void;
}

const BlogContext = createContext<BlogContextType | null>(null);

const initialPosts: BlogPost[] = [
  {
    title: "Logitech G Pro X Wireless Headset",
    price: "120.000",
    category: "Peripherals",
    condition: "New",
    images: ["/img/DiademaBlog.jpg"],
  },
  {
    title: "Razer Huntsman V2 Optical Keyboard",
    price: "80.000",
    category: "Gaming",
    condition: "Used - Like new",
    images: ["/img/TecladoBlog.jpg"],
  },
];

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
    <BlogContext.Provider value={{ posts, addPost, editPost, deletePost }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const ctx = useContext(BlogContext);
  if (!ctx) throw new Error("useBlog must be inside BlogProvider");
  return ctx;
}
