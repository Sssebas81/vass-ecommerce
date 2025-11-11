import React from "react";

function HeropageBlog() {
    return (
      <div
        className="relative flex items-center justify-center h-72 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/HeroPageBlog.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray/10 backdrop-brightness-50"></div>
  
        {/* Contenido */}
        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-sm opacity-90">
            Home <span className="mx-2">›</span> Blog
          </p>
        </div>
      </div>
    );
  }
  
  export default HeropageBlog;