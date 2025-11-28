import supabase from "./supabaseClient";
// Servicio para obtener productos desde Supabase
export async function getProducts() {
  const { data, error } = await supabase
    .from("Products")
    .select("*");

  if (error) throw error;

  return data;
}
