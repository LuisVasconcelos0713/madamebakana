"use server";

import { signIn } from "../../auth";
import { AuthError } from "next-auth";

export default async function LoginAdmin(formData) {
  const userEmail = formData.get("email");
  const userPassword = formData.get("password");

  try {
    await signIn("credentials", {
      email: userEmail,
      password: userPassword,
      redirectTo: "/admin",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credenciais inválidas." };
        default:
          return { error: "Erro ao tentar realizar login." };
      }
    }
    throw error;
  }
}
