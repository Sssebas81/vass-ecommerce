import supabase from "./supabaseClient";

export async function getProducts() {
  const { data, error } = await supabase
    .from("Products")
    .select("*");

  if (error) throw error;

  return data;
}
