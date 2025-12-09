import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import sql from "better-sqlite3";
import {
  signAccessToken,
  verifyToken,
} from "@/src/lib/functions";
import { IUser } from "@/src/interfaces";

const db = sql("yava.db");

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("refreshToken")?.value;

  if (!token)
    return NextResponse.json({ accessToken: null });

  const payload = verifyToken(token) as any;
  if (!payload)
    return NextResponse.json({ accessToken: null });

  const user = db
    .prepare("SELECT * FROM users WHERE id = ?")
    .get(payload.id) as IUser;
  if (!user)
    return NextResponse.json({ accessToken: null });

  const accessToken = signAccessToken({
    id: user.id,
    username: user.username,
  });

  return NextResponse.json({ user, accessToken });
}
