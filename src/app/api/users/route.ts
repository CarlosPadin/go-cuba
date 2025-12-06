import { NextResponse } from "next/server";
import sql from "better-sqlite3";
import bcrypt from "bcryptjs";

const db = sql("yava.db");

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const stmt = db.prepare(`
      INSERT INTO users (
        name, lastName, dateOfBirth, ci, phone, licence,
        address1, address2, country, province, postalCode,
        profileImage, username, password, email
      ) VALUES (
        @name, @lastName, @dateOfBirth, @ci, @phone, @licence,
        @address1, @address2, @country, @province, @postalCode,
        @profileImage, @username, @password, @email
      )
    `);

    const result = stmt.run({
      ...data,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "User created",
        id: result.lastInsertRowid,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("DB error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
