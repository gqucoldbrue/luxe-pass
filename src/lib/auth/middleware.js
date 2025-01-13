// src/lib/auth/middleware.js
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

const PUBLIC_PATHS = ['/', '/about', '/experiences', '/membership', '/join', '/login'];
const AUTH_PATHS = ['/api/auth'];

export async function middleware(request) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Allow public paths and auth paths
  if (PUBLIC_PATHS.includes(pathname) || pathname.startsWith('/api/auth/')) {
    return NextResponse.next();
  }

  // Protected routes - require authentication
  if (!token) {
    const url = new URL('/login', request.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }

  // Member-only routes
  if (pathname.startsWith('/member') && token.role !== 'member') {
    return NextResponse.redirect(new URL('/membership', request.url));
  }

  // Admin-only routes
  if (pathname.startsWith('/admin') && token.role !== 'admin') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/account/:path*',
    '/member/:path*',
    '/admin/:path*',
    '/api/:path*'
  ]
};