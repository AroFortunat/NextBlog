import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {

  const token = request.cookies.get('authToken')?.value; // Remplacez 'authToken' par le nom de votre cookie

  const isProtectedRoute = request.nextUrl.pathname.startsWith('/dashboard');

  if (isProtectedRoute) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);

      const requestHeaders = new Headers(request.headers);
 
      requestHeaders.set('userId', payload.userId as string);
      requestHeaders.set('username', payload.username as string);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('authToken');
      return response;
    }
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};