"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user-data";
export const Login = async ({
  userData,
}: {
  userData: { email: string; password: string };
}) => {
  const existingUser = await getUserByEmail(userData.email);

  if (!existingUser) return { error: "User does not exist" };
  if (!existingUser.email || !existingUser.password)
    return { error: "Invalid credentials" };

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    return { warning: "Please check your mail for verification." };
  }

  try {
    await signIn("credentials", {
      email: userData.email,
      password: userData.password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }
};
