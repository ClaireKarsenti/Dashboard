import type { Session } from 'next-auth';
import { Provider } from 'next-auth/providers';
import { NextResponse } from 'next/server';

interface AuthConfig {
  providers: Provider[];
  pages: {
    signIn: string;
  };
  callbacks: {
    authorized: (params: {
      auth: Session | null;
      request: { nextUrl: URL };
    }) => boolean | Response;
  };
}

export const authConfig: AuthConfig = {
  providers: [],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
      }
      return true;
    },
  },
};
