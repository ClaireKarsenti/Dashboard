import NextAuth from 'next-auth';
import { authConfig } from './pages/api/auth/[...nextAuth]';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};
