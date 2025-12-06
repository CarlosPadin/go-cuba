import { NextResponse } from "next/server";
import sql from "better-sqlite3";
import bcrypt from "bcryptjs";
import { IUser } from "@/src/interfaces";

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
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { message: "Wrong Password" },
        { status: 401 }
      );
    }

    // Remove password
    const { password: _, ...sanitizedUser } = user;

    return NextResponse.json(sanitizedUser, { status: 200 });

  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}
