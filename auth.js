import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "./lib/prisma";
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
          console.log("[AUTH] faltou email ou senha no form");
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.password) {
          console.log(
            "[AUTH] usuário não encontrado no banco:",
            credentials.email,
          );
          return null;
        }

        const passwordCorrect = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!passwordCorrect) {
          console.log("[AUTH] senha incorreta para:", credentials.email);
          return null;
        }

        console.log("[AUTH] login autorizado com sucesso:", credentials.email);

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
