// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  pages: {
    signIn: '/signin',  // Google ile giriş yap sayfası
    error: '/auth/error', // Hata sayfası
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl // Ana sayfaya yönlendirme
    }
  },
  secret: process.env.NEXTAUTH_SECRET, // NextAuth için güvenli bir secret
}

// NextAuth handler'ı burada dışarıya aktarmalıyız
const handler = NextAuth(authOptions)
export { handler }
