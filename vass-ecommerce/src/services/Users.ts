import supabase from './supabaseClient';

export interface Users {
    id: string;
    phone: string;
    country: string;
    city: string;
    adress: string;
    postal_code: string;
}

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