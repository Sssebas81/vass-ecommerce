import { useEffect, useState } from "react";
import { getBlogPosts } from "../../services/blogService";

const BlogContent = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getBlogPosts();
      setPosts(data || []);
    };

    fetchPosts();
  }, []);

  return (
    <section className="blog-section">
      <h2>Latest Blog Posts</h2>

      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            {post.image_url && <img src={post.image_url} alt={post.title} />}
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogContent;
