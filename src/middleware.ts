import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const mobileRegex = /android|iphone|ipad|ipod|blackberry|opera mini/i;
  const isMobile = mobileRegex.test(userAgent);

  // 쿠키에 isMobile 값 저장
  const response = NextResponse.next();
  response.cookies.set("isMobile", isMobile.toString(), {
    httpOnly: false, // 클라이언트에서 읽을 수 있도록
    sameSite: "lax",
    path: "/",
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
