import { NextResponse } from "next/server";
import sql from "better-sqlite3";
import bcrypt from "bcryptjs";
import { v7 as uuidv7 } from "uuid";
import { IExistingUserCheck } from "@/src/interfaces";

const db = sql("yava.db");

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const userId = uuidv7();

    const hashedPassword = await bcrypt.hash(
      data.password,
      10
    );
    const existing = db
      .prepare(
        `
    SELECT
      (SELECT 1 FROM users WHERE username = @username) AS username,
      (SELECT 1 FROM users WHERE email = @email) AS email,
      (SELECT 1 FROM users WHERE ci = @ci) AS ci,
      (SELECT 1 FROM users WHERE licence = @licence) AS licence
  `
      )
      .get(data) as IExistingUserCheck;

    const errors: Record<string, string> = {};

    if (existing.username)
      errors.username = "USERNAME_EXISTS";
    if (existing.email) errors.email = "EMAIL_EXISTS";
    if (existing.ci) errors.ci = "CI_EXISTS";
    if (existing.licence) errors.licence = "LICENCE_EXISTS";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { errors },
        { status: 409 } // Conflict
      );
    }

    const stmt = db.prepare(`
      INSERT INTO users (
        id, name, lastName, dateOfBirth, ci, phone, licence,
        address1, address2, country, province, postalCode,
        profileImage, username, password, email
      ) VALUES (
        @id, @name, @lastName, @dateOfBirth, @ci, @phone, @licence,
        @address1, @address2, @country, @province, @postalCode,
        @profileImage, @username, @password, @email
      )
    `);

    stmt.run({
      id: userId,
      ...data,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "User created",
        id: userId,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("DB error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
