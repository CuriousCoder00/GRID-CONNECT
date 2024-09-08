"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { CallbackRouteError } from "@auth/core/errors";
import { AuthError } from "next-auth";

export const Login = async ({
  userData,
}: {
  userData: { email: string; password: string };
}) => {
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
    if (error instanceof CallbackRouteError) {
      return { error: "Please verify your email and then try again" };
    }
    throw error;
  }
};

