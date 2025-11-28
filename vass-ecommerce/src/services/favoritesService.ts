import supabase from "./supabaseClient";

/**
 * Agrega un producto a la tabla Favorites en Supabase
 * Si la tabla no existe, simplemente retorna true (no es un error crítico)
 */
export const addFavorite = async (
  userId: string,
  productId: number
): Promise<boolean> => {
  try {
    const { error } = await supabase.from("Favorites").insert({
      user_id: userId,
      product_id: productId,
    });

    if (error) {
      // Si la tabla no existe, no es un error - simplemente no sincroniza
      if (
        error.code === "PGRST205" ||
        error.message.includes("not found") ||
        error.message.includes("does not exist")
      ) {
        console.log(
          "ℹ️ Tabla Favorites no disponible, favorito guardado localmente"
        );
        return true;
      }

      // Otros errores sí se reportan
      console.error("❌ Error al agregar favorito en Supabase:", error.message);
      return false;
    }

    console.log("✅ Favorito sincronizado con Supabase");
    return true;
  } catch (error) {
    console.error("❌ Error en addFavorite:", error);
    return true; // Permitir continuar aunque falle Supabase
  }
};

/**
 * Elimina un producto de la tabla Favorites en Supabase
 * Si la tabla no existe, simplemente retorna true (no es un error crítico)
 */
export const removeFavorite = async (
  userId: string,
  productId: number
): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from("Favorites")
      .delete()
      .eq("user_id", userId)
      .eq("product_id", productId);

    if (error) {
      if (
        error.code === "PGRST205" ||
        error.message.includes("not found") ||
        error.message.includes("does not exist")
      ) {
        console.log(
          "ℹ️ Tabla Favorites no disponible, favorito eliminado localmente"
        );
        return true;
      }

      console.error("❌ Error al eliminar favorito en Supabase:", error.message);
      return false;
    }

    console.log("✅ Favorito eliminado de Supabase");
    return true;
  } catch (error) {
    console.error("❌ Error en removeFavorite:", error);
    return true; // Permitir continuar aunque falle Supabase
  }
};
