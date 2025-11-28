import supabase from "./supabaseClient";

export const addFavorite = async (
  userId: string,
  productId: number
) => {
  const { data, error } = await supabase
.from("Favorites")
    .insert([
      {
        user_id: userId,
        product_id: productId,
      },
    ]);

  if (error) {
    console.error("Error adding favorite:", error);
  }

  return data;
};

export const removeFavorite = async (
  userId: string,
  productId: number
) => {
  const { data, error } = await supabase
.from("Favorites")
    .delete()
    .eq("user_id", userId)
    .eq("product_id", productId);

  if (error) {
    console.error("Error removing favorite:", error);
  }

  return data;
};
