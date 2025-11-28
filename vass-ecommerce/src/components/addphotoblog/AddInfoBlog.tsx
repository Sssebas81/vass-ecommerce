import React, { useState } from "react";
import { useBlog } from "../context/BlogContext"; // 👈 IMPORTANTE

function AddInfoBlog() {
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");

  const { addPost } = useBlog(); // 👈 conectar context

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newImages = files.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handlePublish = () => {
    if (!title || !price || !category || !condition || images.length === 0) {
      alert("Please fill all fields and upload at least 1 image.");
      return;
    }

    addPost({
      title,
      price,
      category,
      description,
      condition,
      images,
    });

    setTitle("");
    setPrice("");
    setCategory("");
    setCondition("");
    setImages([]);

    alert("Post published!");
  };

  return (
    <section className="bg-white py-16 flex flex-col items-center px-4">
 
      <label className="flex flex-col items-center justify-center w-40 h-40  cursor-pointer hover:bg-gray-50 transition">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="hidden"
        />
        <div className="text-center">
          <div className="text-gray-600 text-4xl">
            <img src="https://cdn-icons-png.flaticon.com/512/3342/3342176.png" alt="Imagen" />
          </div>
        </div>
      </label>

      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Uploaded ${index + 1}`}
              className="w-24 h-24 object-cover rounded-md border"
            />
          ))}
        </div>
      )}

 
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-md p-3 w-full"
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border rounded-md p-3 w-full"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-md p-3 w-full"
        />
        <input
          type="text"
          placeholder="Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="border rounded-md p-3 w-full"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-md p-3 w-full"
        />
      </div>

      {/* Ubicación */}
      <div className="mt-8 text-left w-full max-w-3xl">
        <p className="font-semibold">Location</p>
        <p className="text-gray-600 text-sm mt-1">Cali, Colombia 760010</p>
      </div>

      {/* Botón */}
      <button
        onClick={handlePublish}
        className="bg-black text-white px-6 py-2 rounded-md mt-8 hover:bg-gray-800 transition-all"
      >
        Publish
      </button>
    </section>
  );
}

export default AddInfoBlog;
