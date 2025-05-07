// src/pages/api/auth/[...nextauth].ts

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { User, Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    id: string;
    email: string;
  }
  interface JWT {
    id: string;
    email: string;
  }
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // JWT imzalama için gerekli.
  session: {
    strategy: "jwt" as const, // JWT tabanlı oturum yönetimi
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id!;
        token.email = user.email!;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.id = token.id as string;
      session.email = token.email as string;
      return session;
    },
  },
};

export default NextAuth(authOptions);
