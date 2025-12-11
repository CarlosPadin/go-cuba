import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("refreshToken"); // Ejemplo

  const notAllowedPage = req.nextUrl.pathname === "/login" || "/register";

  if (token && notAllowedPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register"],
};
