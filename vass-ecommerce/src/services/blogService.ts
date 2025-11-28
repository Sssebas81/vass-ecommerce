import { supabase } from "../supabaseClient";
export const createBlogPost = async (postData: any) => {
  const { data, error } = await supabase
    .from("BlogPosts")
    .insert([postData])
    .select();

  if (error) {
    console.error("Error inserting BlogPost:", error);
    return null;
  }

  return data[0];
};

export const getBlogPosts = async () => {
  const { data, error } = await supabase
    .from("BlogPosts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching BlogPosts:", error);
    return [];
  }

  return data;
};
