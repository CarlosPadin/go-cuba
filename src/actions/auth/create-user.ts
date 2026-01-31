"use server";

import { IUserProfile } from "@/src/interfaces";
import { createClient } from "@/src/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function createUserAction(data: IUserProfile ) {
  try {
    const supabase = await createClient();

    // Validations
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
          first_name: data.name,
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
    
    // Create profile in the profiles table
    if (authData.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: authData.user.id,
        username: data.name,
        first_name: data.name,
        last_name: data.lastName,
        email: data.email,
        date_of_birth: data.dateOfBirth,
        phone: data.phone,
        ci: data.ci,
        address1: data.address1,
        address2: data.address2,
        country: data.country,
        city: data.province,
        zip_code: data.postalCode,
        profile_image_url: data.profileImage, 
      });

      if (profileError) {
        console.log("Profile creation failed:", profileError);

        return {
          error: "Failed to create user profile",
          success: false,
          data: null,
        };
      }
    }

    revalidatePath("/");

    return {
      error: null,
      success: true,
      data: authData,
    };
  } catch (error) {
    console.log("Unexpected error:", error);
    return {
      error: "An unexpected error occurred",
      success: false,
      data: null,
    };
  }
}
