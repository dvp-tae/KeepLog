import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const mobileRegex = /android|iphone|ipad|ipod|blackberry|opera mini/i;
  const isMobile = mobileRegex.test(userAgent);

  const response = NextResponse.next();
  response.cookies.set("isMobile", isMobile.toString(), {
    httpOnly: false,
    sameSite: "lax",
    path: "/",
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
