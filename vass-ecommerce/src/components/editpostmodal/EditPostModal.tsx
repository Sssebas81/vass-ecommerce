import { useState } from "react";
import { useBlog } from "../context/BlogContext";
import type { BlogPost } from "../context/BlogContext";
// Props del componente
interface Props {
    post: BlogPost;
    index: number;
    onClose: () => void;
    onSave?: (index: number, updated: BlogPost) => void;
}
// Componente para editar un post del blog
export default function EditPostModal({ post, index, onClose, onSave }: Props) {
    const { editPost } = useBlog();

    // Estado inicial del formulario
    // Use a BlogPost object as the form state so it's consistent with context
    const [form, setForm] = useState<BlogPost>(() => ({ ...post }));

    // Manejar cambios de texto
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === "image") {
            // update first image slot
            setForm(prev => ({ ...prev, images: [value, ...(prev.images?.slice(1) || [])] }));
            return;
        }

        // update other string properties on BlogPost
        setForm(prev => ({ ...(prev as BlogPost), [name]: value } as BlogPost));
    };

    // Manejar cambio de imagen
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const blobUrl = URL.createObjectURL(file);
            setForm(prev => ({ ...prev, images: [blobUrl, ...(prev.images?.slice(1) || [])] }));
        }
    };

    // Guardar cambios
    const handleSave = () => {
        const updatedPost: BlogPost = {
            ...post,
            ...form,
            // ensure images array exists and contains the first image/url
            images: form.images && form.images.length ? [...form.images] : [],
        };

        // Prefer onSave handler (parent) if provided — otherwise use context editPost
        if (onSave) onSave(index, updatedPost);
        else editPost(index, updatedPost);

        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center bg-cover" style={{ backgroundImage: "url('/img/LoginBackground.jpg')" }}>
            <div className="bg-black p-6 rounded-lg w-full max-w-lg space-y-4">

                <h2 className="text-xl text-white font-semibold">Edit Post</h2>

                {/* Imagen actual */}
                <div className="flex flex-col items-center gap-2">
                    <img
                        src={form.images?.[0] ?? ""}
                        alt="Current"
                        className="w-40 h-40 object-cover rounded-lg shadow"
                    />

                    {/* Input para subir nueva imagen */}
                    <label className="px-4 py-2 bg-black text-white rounded cursor-pointer hover:bg-white hover:text-black transition">
                        Subir imagen
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>

                </div>

                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="border w-full p-2 rounded bg-white text-black"
                    placeholder="Title"
                />

                <input
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="border w-full p-2 rounded  bg-white text-black"
                    placeholder="Price"
                />

                <input
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="border w-full p-2 rounded  bg-white text-black"
                    placeholder="Category"
                />

                <input
                    name="condition"
                    value={form.condition}
                    onChange={handleChange}
                    className="border w-full p-2 rounded  bg-white text-black"
                    placeholder="Condition"
                />

                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    className="border w-full p-2 rounded  bg-white text-black"
                    placeholder="Description"
                ></textarea>

                <div className="flex gap-4 justify-end mt-4">
                    <img
                        src="/img/LogoVassBlanco.svg"
                        alt="Logo"
                        className="h-8 w-auto mr-40"
                    />
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-black bg-white rounded"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-cyan-500 text-white rounded"
                    >
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
}
