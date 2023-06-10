import { NextRequest, NextResponse } from 'next/server'

const EXCLUDED_PATHS = [
  "/login",
  "/_error",
  "/_document",
  "/_app",
  "/_next/",
  "/assets/",
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
  "/img/",
  "/vercel.svg",
  "/api/",
  "/auth",
  "/logout",
];

export async function middleware(req: NextRequest, res: NextResponse) {
  // Modify the request or response objects
  // Add headers or perform authentication
  const response = NextResponse.next();
  let checkUrl = req.nextUrl.pathname;
  let result = EXCLUDED_PATHS.some((substr) =>
    checkUrl.toLowerCase().startsWith(substr.toLowerCase())
  );
  if (result) return response;


  console.log('Middleware running...')
  return NextResponse.next()
}
