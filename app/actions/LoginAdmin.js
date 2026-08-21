"use server";

import { signIn } from "../../auth";

export default async function LoginAdmin(formData) {
  const userEmail = formData.get("email");
  const userPassword = formData.get("password");

  await signIn("credentials", {
    email: userEmail,
    password: userPassword,
    redirectTo: "/admin",
  });
}
