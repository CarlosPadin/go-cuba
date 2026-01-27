// import { NextResponse } from "next/server";
// import sql from "better-sqlite3";
// import bcrypt from "bcryptjs";
// import { v7 as uuidv7 } from "uuid";
// import { IExistingUserCheck } from "@/src/interfaces";

// const db = sql("yava.db");

// export async function POST(req: Request) {
//   try {
//     const data = await req.json();
//     const userId = uuidv7();

//     const hashedPassword = await bcrypt.hash(
//       data.password,
//       10
//     );
//     const existing = db
//       .prepare(
//         `
//     SELECT
//       (SELECT 1 FROM users WHERE username = @username) AS username,
//       (SELECT 1 FROM users WHERE email = @email) AS email,
//       (SELECT 1 FROM users WHERE ci = @ci) AS ci,
//       (SELECT 1 FROM users WHERE licence = @licence) AS licence
//   `
//       )
//       .get(data) as IExistingUserCheck;

//     const errors: Record<string, string> = {};

//     if (existing.username)
//       errors.username = "USERNAME_EXISTS";
//     if (existing.email) errors.email = "EMAIL_EXISTS";
//     if (existing.ci) errors.ci = "CI_EXISTS";
//     if (existing.licence) errors.licence = "LICENCE_EXISTS";

//     if (Object.keys(errors).length > 0) {
//       return NextResponse.json(
//         { errors },
//         { status: 409 } // Conflict
//       );
//     }

//     const stmt = db.prepare(`
//       INSERT INTO users (
//         id, name, lastName, dateOfBirth, ci, phone, licence,
//         address1, address2, country, province, postalCode,
//         profileImage, username, password, email
//       ) VALUES (
//         @id, @name, @lastName, @dateOfBirth, @ci, @phone, @licence,
//         @address1, @address2, @country, @province, @postalCode,
//         @profileImage, @username, @password, @email
//       )
//     `);

//     stmt.run({
//       id: userId,
//       ...data,
//       password: hashedPassword,
//     });

//     return NextResponse.json(
//       {
//         message: "User created",
//         id: userId,
//       },
//       { status: 201 }
//     );
//   } catch (err: any) {
//     console.error("DB error:", err);
//     return NextResponse.json(
//       { error: "Server error" },
//       { status: 500 }
//     );
//   }
// }

// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { v7 as uuidv7 } from "uuid";
import pool from "@/src/lib/db";
import { IExistingUserCheck } from "@/src/interfaces";

export async function POST(req: Request) {
  let connection;
  
  try {
    const data = await req.json();
    const userId = uuidv7();
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Obtener conexión del pool
    connection = await pool.getConnection();

    // 1. Verificar usuario existente - MODIFICADO para MySQL
    const [existingRows] = await connection.query(`
      SELECT 
        EXISTS(SELECT 1 FROM users WHERE username = ?) as username_exists,
        EXISTS(SELECT 1 FROM users WHERE email = ?) as email_exists,
        EXISTS(SELECT 1 FROM users WHERE ci = ?) as ci_exists,
        EXISTS(SELECT 1 FROM users WHERE licence = ?) as licence_exists
    `, [
      data.username,
      data.email,
      data.ci,
      data.licence
    ]);

    const existing = (existingRows as IExistingUserCheck[])[0];

    const errors: Record<string, string> = {};

    if (existing.username) errors.username = "USERNAME_EXISTS";
    if (existing.email) errors.email = "EMAIL_EXISTS";
    if (existing.ci) errors.ci = "CI_EXISTS";
    if (existing.licence) errors.licence = "LICENCE_EXISTS";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 409 });
    }

    // 2. Insertar nuevo usuario
    await connection.query(`
      INSERT INTO users (
        id, name, lastName, dateOfBirth, ci, phone, licence,
        address1, address2, country, province, postalCode,
        profileImage, username, password, email
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      userId,
      data.name,
      data.lastName,
      data.dateOfBirth,
      data.ci,
      data.phone,
      data.licence,
      data.address1,
      data.address2 || null,
      data.country,
      data.province,
      data.postalCode,
      data.profileImage || '/default-avatar.jpg',
      data.username,
      hashedPassword,
      data.email
    ]);

    return NextResponse.json(
      {
        message: "User created successfully",
        id: userId,
        user: {
          id: userId,
          username: data.username,
          email: data.email,
          name: data.name,
          lastName: data.lastName
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Signup error:", error);
    
    // Manejo específico de errores MySQL
    if ((error as any).code === 'ER_DUP_ENTRY') {
      return NextResponse.json(
        { error: "Duplicate entry. User already exists." },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
    
  } finally {
    // Siempre liberar la conexión
    if (connection) {
      connection.release();
    }
  }
}