import supabase from "./supabaseClient";

export async function registerUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data.user;
}

export async function loginUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message || "Correo o contraseña incorrectos.");
  }

  return { user: data.user };
}

