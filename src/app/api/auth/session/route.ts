// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import sql from "better-sqlite3";
// import {
//   signAccessToken,
//   verifyToken,
// } from "@/src/lib/functions";
// import { IUser } from "@/src/interfaces";

// const db = sql("yava.db");

// export async function GET() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("refreshToken")?.value;

//   if (!token)
//     return NextResponse.json({ accessToken: null });

//   const payload = verifyToken(token) as any;
//   if (!payload)
//     return NextResponse.json({ accessToken: null });

//   const user = db
//     .prepare("SELECT * FROM users WHERE id = ?")
//     .get(payload.id) as IUser;
//   if (!user)
//     return NextResponse.json({ accessToken: null });

//   const accessToken = signAccessToken({
//     id: user.id,
//     username: user.username,
//   });

//   return NextResponse.json({ user, accessToken });
// }

// app/api/auth/session/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { RowDataPacket } from "mysql2";
import pool from "@/src/lib/db";
import { signAccessToken, verifyToken } from "@/src/lib/functions";
import { IUser } from "@/src/interfaces";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("refreshToken")?.value;

    if (!token) {
      return NextResponse.json({ 
        success: false, 
        accessToken: null,
        message: "No refresh token found"
      });
    }

    const payload = verifyToken(token) as { id: string };
    if (!payload?.id) {
      return NextResponse.json({ 
        success: false, 
        accessToken: null,
        message: "Invalid token"
      });
    }

    // Buscar usuario en MySQL
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT id, username, email, name, lastName, 
              profileImage, rating, created_at
       FROM users 
       WHERE id = ?`,
      [payload.id]
    );

    const user = rows[0] as IUser | undefined;

    if (!user) {
      return NextResponse.json({ 
        success: false, 
        accessToken: null,
        message: "User not found"
      });
    }

    // Generar nuevo access token
    const accessToken = signAccessToken({
      id: user.id,
      username: user.username,
      email: user.email
    });

    // NO devuelvas el password
    const { password: _, confirmPassword: __, ...safeUser } = user;

    return NextResponse.json({ 
      success: true, 
      user: safeUser, 
      accessToken 
    });

  } catch (error) {
    console.error("Session error:", error);
    return NextResponse.json({ 
      success: false, 
      accessToken: null,
      message: "Session validation failed"
    });
  }
}