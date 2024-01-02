import { User as UserModel } from '@/src/lib/models';
import { connectToDB } from '@/src/lib/utils';
import { authConfig } from '@/pages/api/auth/[...nextAuth]';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const login = async (credentials: any) => {
  try {
    console.log('Attempting login with credentials:', credentials);

    connectToDB();

    const user = await UserModel.findOne({ username: credentials.username });
    console.log('User found in the database:', user);

    if (!user || !user.isAdmin) throw new Error('❌Wrong credentials!');
    console.log('User is an admin:', user.isAdmin);

    console.log('Entered password:', credentials.password);

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    console.log('Is password correct:', isPasswordCorrect);

    if (!isPasswordCorrect) throw new Error('❌Wrong credentials!');

    return user;
  } catch (err) {
    console.log(err);
    throw new Error('❗️Failed to login!');
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'username' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user: any }): Promise<any> {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
      }
      return session;
    },
  },
});
