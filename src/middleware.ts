import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  //practice logging request details
  // console.log("Middleware href:", req.nextUrl.href);
  // console.log("Middleware origin:", req.nextUrl.origin);
  // console.log("Middleware pathname:", req.nextUrl.pathname);
  // console.log("Middleware search:", req.nextUrl.search);
  // console.log("Middleware SearchParams:", req.nextUrl.searchParams);
  // console.log("Middleware locale:", req.nextUrl.locale);
  const path = req.nextUrl.pathname;
  if (path === "/en" || path === "/en/") {
    return NextResponse.redirect(new URL("/", req.url));
  }
   // detect locale
  let locale = "en"; // default
  const firstSegment = path.split("/")[1];
  if (firstSegment) locale = firstSegment;

  const res = NextResponse.next();
  res.headers.set("x-locale", locale);
  return res;
}

export const config = {
   matcher: ["/((?!_next).*)"], 
};
