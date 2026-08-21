import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
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

        if (!user) {
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
        };
      },
    }),
  ],
  pages: {
    signIn: "/Login",
  },

  session: {
    strategy: "jwt",
  },
});
