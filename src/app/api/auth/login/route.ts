// import { NextResponse } from "next/server";
// import sql from "better-sqlite3";
// import bcrypt from "bcryptjs";
// import { serialize } from "cookie";
// import { IUser } from "@/src/interfaces";
// import { signAccessToken, signRefreshToken } from "@/src/lib/functions";

// const db = sql("yava.db");

// export async function POST(request: Request) {
//   try {
//     const { username, password } = await request.json();

//     // Find user
//     const user = db
//       .prepare("SELECT * FROM users WHERE username = ?")
//       .get(username) as IUser | undefined;

//     if (!user) {
//       return NextResponse.json(
//         { message: "USER_NOT_FOUND" },
//         { status: 401 }
//       );
//     }

//     // Compare passwords
//     const isValid = await bcrypt.compare(
//       password,
//       user.password
//     );
//     if (!isValid) {
//       return NextResponse.json(
//         { message: "WRONG_PASSWORD" },
//         { status: 401 }
//       );
//     }

//     // Generate token
//     const accessToken = signAccessToken({ id: user.id, username: user.username });
//     const refreshToken = signRefreshToken({ id: user.id });

//     // Set Secure Cookie
//     const cookie = serialize("refreshToken", refreshToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       path: "/",
//       maxAge: 60 * 60 * 24 * 15, // 15 días
//     });

//     const headers = new Headers();
//     headers.append("Set-Cookie", cookie);

//     const { password: _, ...sanitized } = user;

//     return new NextResponse(JSON.stringify({ user: sanitized, accessToken }), {
//       status: 200,
//       headers,
//     });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ message: "Server Token Creation Error" }, { status: 500 });
//   }
// }

// app/api/auth/login/route.js - Versión optimizada
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { RowDataPacket } from "mysql2";
import pool from "@/src/lib/db";
import {
  signAccessToken,
  signRefreshToken,
} from "@/src/lib/functions";
import { IUser } from "@/src/interfaces";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Validación básica
    if (!username?.trim() || !password?.trim()) {
      return NextResponse.json(
        { message: "USER AND PASSWORD ARE REQUIRED" },
        { status: 400 }
      );
    }
    // Buscar usuario en MySQL
    const [users] = await pool.query<RowDataPacket[]>(
      `SELECT id, username, email, password, name, lastName, 
                  profileImage
           FROM users 
           WHERE username = ?`,
      [username]
    );

    const user = (users as IUser[])[0];

    if (!user) {
      return NextResponse.json(
        { message: "USER_NOT_FOUND" },
        { status: 401 }
      );
    }

    // Verificar contraseña
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return NextResponse.json(
        { message: "WRONG_PASSWORD" },
        { status: 401 }
      );
    }

    // Generar tokens (asumiendo que tienes estas funciones)
    const accessToken = signAccessToken({
      userId: user.id,
      username: user.username,
      email: user.email,
    });

    const refreshToken = signRefreshToken({
      userId: user.id,
    });

    // Cookie segura
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax" as const, // 'strict' puede dar problemas en algunos casos
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 días
    };

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        profileImage: user.profileImage,
      },
      accessToken,
    });

    // Establecer cookie
    response.cookies.set({
      name: "refreshToken",
      value: refreshToken,
      ...cookieOptions,
    });

    return response;
  } catch (error) {
    console.error("Login Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error:
          process.env.NODE_ENV === "development"
            ? (error as Error).message
            : undefined,
      },
      { status: 500 }
    );
  }
}
