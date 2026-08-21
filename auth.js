import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma"; // ajuste o caminho se necessário
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.password) {
          return null;
        }

        const passwordCorrect = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!passwordCorrect) {
          return null;
        }

        return {
          id: String(user.id),
          email: user.email,
          name: user.name || null,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
});
