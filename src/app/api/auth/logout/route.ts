// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// export async function POST() {
//   const cookieStore = await cookies();
  
//   cookieStore.set("refreshToken", "", {
//     httpOnly: true,
//     secure: true,
//     sameSite: "lax",
//     path: "/",
//     expires: new Date(0)  //Expires now
//   });

//   return NextResponse.json({ success: true });
// }

// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();
    
    // Eliminar la cookie - Misma configuración que en login
    cookieStore.set("refreshToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Usa la misma condición
      sameSite: "lax",
      path: "/",
      maxAge: 0  // Esto elimina la cookie inmediatamente
    });

    return NextResponse.json({ 
      success: true,
      message: "Logged out successfully" 
    });
    
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Logout failed" 
      },
      { status: 500 }
    );
  }
}
