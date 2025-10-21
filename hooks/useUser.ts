
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface UserPayload {
  username: string;
  lastname: string;
  email: string;
  userId: string;
  iat?: number;
  exp?: number;
}

export function useUser() {
  const [user, setUser] = useState<UserPayload | null>(null);

  useEffect(() => {
    const getToken = () => {
      // Récupère le token depuis les cookies
      const cookies = document.cookie.split(';');
      const tokenCookie = cookies.find(cookie => 
        cookie.trim().startsWith('authToken=')
      );
      return tokenCookie ? tokenCookie.split('=')[1] : null;
    };

    const token = getToken();
    
    if (token) {
      try {
        const decoded = jwtDecode<UserPayload>(token);
        setUser(decoded);
      } catch (error) {
        console.error('Erreur décodage JWT:', error);
      }
    }
  }, []);

  return user;
}