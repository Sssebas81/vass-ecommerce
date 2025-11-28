import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qmxycsmtzrbokdgdupyf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFteHljc210enJib2tkZ2R1cHlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMTM0ODUsImV4cCI6MjA3OTY4OTQ4NX0.h2j8pMf9lvKi9Cstc1LQGAI-Ay9f4k8yUnWqXbC7kKQ";

const supabase = createClient(supabaseUrl, supabaseKey);

const AddInfoBlog = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");

  const handleUpload = async () => {
    if (!imageFile) return alert("Sube una imagen");

    // SUBIR LA IMAGEN AL BUCKET
    const fileName = `${Date.now()}-${imageFile.name}`;

    const { data: imgData, error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(fileName, imageFile);

    if (uploadError) {
      console.error(uploadError);
      return alert("Error subiendo imagen");
    }

    // OBTENER URL PÚBLICA
    const { data: publicUrlData } = supabase.storage
      .from("blog-images")
      .getPublicUrl(fileName);

    const imageUrl = publicUrlData.publicUrl;

    // INSERTAR EN TABLA BlogPosts
    const { error: insertError } = await supabase.from("BlogPosts").insert([
      {
        title,
        price,
        category,
        condition,
        description,
        image_url: imageUrl,
      },
    ]);

    if (insertError) {
      console.error(insertError);
      return alert("Error guardando en la base de datos");
    }

    alert("Producto publicado con éxito 🎉");

    // limpiar formulario
    setImageFile(null);
    setTitle("");
    setPrice("");
    setCategory("");
    setCondition("");
    setDescription("");
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2 style={{ marginBottom: "30px" }}>Publicar un Producto</h2>

      {/* Image Upload */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
        />
      </div>

      {/* Fields */}
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <input
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />

          <input
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input"
          />
        </div>

        <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
          <input
            placeholder="Categoría"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input"
          />

          <input
            placeholder="Condición"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="input"
          />
        </div>

        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
          style={{ width: "100%", marginTop: "15px", height: "100px" }}
        />

        <button
          onClick={handleUpload}
          style={{
            marginTop: "25px",
            background: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px",
          }}
        >
          Publicar
        </button>
      </div>
    </div>
  );
};

export default AddInfoBlog;
