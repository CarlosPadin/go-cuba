"use server";

import { createClient } from "@/src/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function logoutUserAction() {
  try {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      return {
        error: error.message,
        success: false,
      };
    }

    revalidatePath("/");

    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      error: "An unexpected error occurred",
      success: false,
    };
  }
}
