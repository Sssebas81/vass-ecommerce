import supabase from './supabaseClient';
// Servicio para manejar datos de usuarios en Supabase
export interface Users {
    id: string;
    phone: string;
    country: string;
    city: string;
    adress: string;
    postal_code: string;
}
// Función para insertar datos de usuario en la tabla 'Users'
export async function postUserData(email: string) {

    const { data, error } = await supabase
        .from('Users')
        .insert({email:email})
        .select()
    if (error) {
        console.error('Error inserting user data:', error);
        throw error;
    } else {
        console.log('User data inserted successfully:', data);
        return data;
    }
}