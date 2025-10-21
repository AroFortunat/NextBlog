import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  // 1. Récupérer le token depuis les cookies
  const token = request.cookies.get('authToken')?.value; // Remplacez 'authToken' par le nom de votre cookie

  // 2. Définir les routes protégées
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/dashboard');

  if (isProtectedRoute) {
    // 3. Si la route est protégée et que le token est absent, rediriger vers login
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      // 4. Vérifier le token en utilisant la même clé secrète que NestJS
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);

      // 5. (Optionnel) Vous pouvez ajouter les informations utilisateur aux en-têtes de la requête
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('userId', payload.userId as string);
      requestHeaders.set('username', payload.username as string);

      // Laisser la requête continuer avec les nouveaux en-têtes
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      // 6. Si la vérification échoue, rediriger et effacer le cookie invalide
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('authToken');
      return response;
    }
  }
}

// Configurer le middleware pour qu'il s'applique sur les routes spécifiques
export const config = {
  matcher: ['/dashboard/:path*'],
};