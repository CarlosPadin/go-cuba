import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  
  cookieStore.set("refreshToken", "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    expires: new Date(0)  //Expires now
  });

  return NextResponse.json({ success: true });
}
