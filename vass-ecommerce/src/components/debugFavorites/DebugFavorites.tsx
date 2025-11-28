import { useState, useEffect } from "react";
import supabase from "../../services/supabaseClient";

export function DebugFavorites() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    checkUser();
  }, []);

  const fetchFavorites = async () => {
    if (!user) {
      alert("❌ No hay usuario logueado");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      console.log("🔄 Intentando cargar favoritos de Supabase...");
      const { data, error: queryError } = await supabase
        .from("Favorites")
        .select("*")
        .eq("user_id", user.id);

      if (queryError) {
        console.warn("⚠️ Error al cargar de Supabase:", queryError.message);
        
        // Si es error de tabla no existe, mostrar mensaje amigable
        if (queryError.code === "PGRST205" || queryError.message.includes("not found")) {
          setError("La tabla Favorites aún no existe en Supabase. Los favoritos se guardan localmente.");
          console.info("💡 Puedes crear la tabla siguiendo SETUP_TABLA_FAVORITOS.md");
          setFavorites([]);
          setLoading(false);
          return;
        }
        
        setError(queryError.message);
        alert("❌ Error: " + queryError.message);
        return;
      }

      setFavorites(data || []);
      console.log("✅ Favoritos cargados:", data?.length || 0);
    } catch (error) {
      console.error("❌ Error:", error);
      const errorMsg = String(error);
      setError(errorMsg);
      alert("❌ Error: " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const testInsert = async () => {
    if (!user) {
      alert("❌ No hay usuario logueado");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      console.log("➕ Intentando insertar favorito de prueba...");
      const { error } = await supabase.from("Favorites").insert({
        user_id: user.id,
        product_id: 24, // Producto de prueba
      });

      if (error) {
        console.warn("⚠️ Error al insertar:", error.message);
        
        if (error.code === "PGRST205" || error.message.includes("not found")) {
          setError("La tabla Favorites no existe. Necesitas crearla en Supabase.");
          alert("⚠️ La tabla Favorites no existe.\n\nPara crearla, ve a Supabase → SQL Editor y copia el SQL de SETUP_TABLA_FAVORITOS.md");
          setLoading(false);
          return;
        }
        
        alert("❌ Error al insertar: " + error.message);
        setError(error.message);
        return;
      }

      alert("✅ Favorito de prueba insertado correctamente");
      console.log("✅ Test insert exitoso");
      setError(null);
      fetchFavorites();
    } catch (error) {
      console.error("❌ Error:", error);
      const errorMsg = String(error);
      setError(errorMsg);
      alert("❌ Error: " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 z-50"
      >
        🐛 Debug Favoritos
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-6 rounded-lg shadow-lg z-50 max-w-md max-h-96 overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">🐛 Debug Favoritos</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
        >
          ✕
        </button>
      </div>

      <div className="space-y-2 text-sm mb-4">
        <div>
          <strong>Usuario:</strong>
          <p className="text-gray-400">
            {user ? user.email : "❌ No logueado"}
          </p>
        </div>
        <div>
          <strong>User ID:</strong>
          <p className="text-gray-400 break-all">
            {user?.id || "❌ No disponible"}
          </p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <button
          onClick={fetchFavorites}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-4 py-2 rounded"
        >
          {loading ? "Cargando..." : "🔄 Cargar Favoritos"}
        </button>
        <button
          onClick={testInsert}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-2 rounded"
        >
          {loading ? "Insertando..." : "➕ Test Insert"}
        </button>
      </div>

      {favorites.length > 0 && (
        <div className="bg-gray-900 p-2 rounded">
          <strong>✅ {favorites.length} Favoritos:</strong>
          <ul className="text-gray-300 text-xs mt-2 space-y-1">
            {favorites.map((fav) => (
              <li key={fav.id}>
                Product ID: {fav.product_id} | {fav.created_at}
              </li>
            ))}
          </ul>
        </div>
      )}

      {favorites.length === 0 && !loading && (
        <div className="text-gray-400 text-sm">
          {error ? (
            <div className="bg-red-900 p-2 rounded text-red-200">
              <strong>❌ Error:</strong>
              <p className="text-xs mt-1">{error}</p>
            </div>
          ) : (
            "ℹ️ No hay favoritos o haz click en \"Cargar Favoritos\""
          )}
        </div>
      )}
    </div>
  );
}
