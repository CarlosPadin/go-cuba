import { NextResponse } from "next/server";
import sql from "better-sqlite3";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";
import { IUser } from "@/src/interfaces";
import { signAccessToken, signRefreshToken } from "@/src/lib/functions";

const db = sql("yava.db");

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Missing credentials" },
        { status: 400 }
      );
    }
    // Find user
    const user = db
      .prepare("SELECT * FROM users WHERE username = ?")
      .get(username) as IUser | undefined;

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 401 }
      );
    }

    // Compare passwords
    const isValid = await bcrypt.compare(
      password,
      user.password
    );
    if (!isValid) {
      return NextResponse.json(
        { message: "Wrong Password" },
        { status: 401 }
      );
    }

    // Generate token
    const accessToken = signAccessToken({ id: user.id, username: user.username });
    const refreshToken = signRefreshToken({ id: user.id });

    // Set Secure Cookie
    const cookie = serialize("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 15, // 15 días
    });

    const headers = new Headers();
    headers.append("Set-Cookie", cookie);

    const { password: _, ...sanitized } = user;

    return new NextResponse(JSON.stringify({ user: sanitized, accessToken }), {
      status: 200,
      headers,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error interno" }, { status: 500 });
  }
}
