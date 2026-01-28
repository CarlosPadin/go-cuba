"use server";

import { createClient } from "@/src/lib/supabase/server";
import { revalidatePath } from "next/cache";

interface CreateUserData {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export async function createUserAction(data: CreateUserData) {
  try {
    const supabase = await createClient();

    // Validaciones
    if (!data.email || !data.password || !data.username) {
      return {
        error: "Required fields missing",
        success: false,
        data: null,
      };
    }

    const { data: existingProfile } = await supabase
      .from("profiles")
      .select("username")
      .eq("username", data.username)
      .single();

    if (existingProfile) {
      return {
        error: "Username already exists",
        success: false,
        data: null,
      };
    }

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          username: data.username,
          first_name: data.firstName,
          last_name: data.lastName,
        },
      },
    });

    if (authError) {
      return {
        error: authError.message,
        success: false,
        data: null,
      };
    }

    // Crear perfil en la tabla profiles
    if (authData.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: authData.user.id,
        username: data.username,
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        date_of_birth: data.dateOfBirth,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        zip_code: data.zipCode,
      });

      if (profileError) {
        // Si falla la creación del perfil, intentar eliminar el usuario de auth
        // Nota: Esto requiere permisos de admin, en producción considera una queue
        console.error("Profile creation failed:", profileError);

        return {
          error: "Failed to create user profile",
          success: false,
          data: null,
        };
      }
    }

    // Revalidar la página de inicio
    revalidatePath("/");

    return {
      error: null,
      success: true,
      data: authData,
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      error: "An unexpected error occurred",
      success: false,
      data: null,
    };
  }
}
