import { useState } from "react";
import supabase from "../../services/supabaseClient";
import { useBlog } from "../context/BlogContext";
// Componente para agregar información del blog
const AddInfoBlog = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
// Estados para los campos del formulario
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
// Manejar el cambio de imagen y generar una vista previa
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);

    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };
// Manejar la subida de la imagen y los datos del formulario
  const { addPost } = useBlog();
// Función para manejar la subida de la imagen y los datos del formulario
  const handleUpload = async () => {
    if (!imageFile) return alert("Sube una imagen");

    const fileName = `${Date.now()}-${imageFile.name}`;
// Subir la imagen a Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(fileName, imageFile);

    if (uploadError) {
      console.error(uploadError);
      return alert("Error subiendo imagen");
    }

    const { data: publicUrlData } = supabase.storage
      .from("blog-images")
      .getPublicUrl(fileName);

    const imageUrl = publicUrlData.publicUrl;

    // get current user (if any)
    const { data: userData } = await supabase.auth.getUser();
    const currentEmail = (userData as any)?.user?.email || null;
    if (!currentEmail) {
      alert("❌ Debes iniciar sesión para publicar. Por favor, inicia sesión e inténtalo de nuevo.");
      return;
    }

    const { error: insertError } = await supabase
      .from("BlogPosts")
      .insert({
        title,
        price,
        user_email: currentEmail,
        category,
        condition,
        description,
        images: [imageUrl], // ← IMPORTANTE
      });


    if (insertError) {
      console.error(insertError);
      return alert("Error guardando en la base de datos");
    }
      // add to BlogContext so it appears in the blog page with Edit/Delete

    if (!insertError) {
      addPost({
        title: title || "Untitled",
        price: price || "",
        category: category || "",
        condition: condition || "",
        description: description || "",
        images: [imageUrl],
      });
      alert("Producto publicado con éxito 🎉");
      // Reset form
      setTitle("");
      setPrice("");
      setCategory("");
      setCondition("");
      setDescription("");
      setImageFile(null);
      setPreview(null);
    }
  };

  return (
    <div className="flex justify-center mt-16 p-4">
      <div className="max-w-3xl w-full bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Post a Product
        </h2>

        {/* Caja grande para la imagen */}
        <label
          className="w-full h-72 border-2 border-dashed border-gray-400 flex flex-col 
          justify-center items-center rounded-xl cursor-pointer hover:bg-gray-100 transition"
        >
          {preview ? (
            <img
              src={preview}
              alt="Vista previa"
              className="h-full w-full object-cover rounded-xl"
            />
          ) : (
            <>
              <span className="text-6xl text-gray-500">＋</span>
              <p className="text-gray-500 mt-2">Click to upload an image</p>
            </>
          )}

          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <input
            placeholder="Title"
            className="border p-2 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Price"
            className="border p-2 rounded-md"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            placeholder="Category"
            className="border p-2 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            placeholder="Condition"
            className="border p-2 rounded-md"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </div>

        <textarea
          placeholder="Description"
          className="border p-2 rounded-md w-full mt-4 h-24"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          onClick={handleUpload}
          className="w-full mt-6 bg-black text-white py-3 rounded-lg text-lg hover:bg-gray-800 transition"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default AddInfoBlog;
