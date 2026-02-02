"use server";

import { createClient } from "@/src/lib/supabase/server";
import { revalidatePath } from "next/cache";

interface LoginData {
  username: string;
  password: string;
}

export async function loginUserAction(credentials: LoginData) {
  try {
    const supabase = await createClient();

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("email")
      .eq("username", credentials.username)
      .single();

    if (profileError || !profile) {
      return {
        error: "INVALID_USERNAME_OR_PASSWORD",
        success: false,
        data: null,
      };
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: profile.email,
      password: credentials.password,
    });

    if (error) {
      return {
        error: "INVALID_USERNAME_OR_PASSWORD",
        success: false,
        data: null,
      };
    }

    revalidatePath("/");

    return {
      error: null,
      success: true,
      data,
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
