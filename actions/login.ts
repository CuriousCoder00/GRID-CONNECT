"use server";

import { signIn } from "@/lib/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/lib/data/user-data";
export const Login = async ({
  data,
}: {
  data: { email: string; password: string };
}) => {
  const existingUser = await getUserByEmail(data.email);

  if (!existingUser) return { error: "User does not exist" };
  if (!existingUser.email || !existingUser.password)
    return { error: "Invalid credentials", status: 400 };

  if (!existingUser.emailVerified) {
    await generateVerificationToken(existingUser.email);
    return { warning: "Please check your mail for verification.", status: 400 };
  }

  try {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "Login successful", status: 200 };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials", status: 400 };
        default:
          return { error: "Something went wrong", status: 500 };
      }
    }
    throw error;
  }
};
