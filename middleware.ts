import { cookies } from "next/headers";
import { NextMiddleware, NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = cookies().get("access-token") ?? false;
  if (!token) return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/",
};
