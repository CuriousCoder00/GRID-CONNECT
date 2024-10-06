import { DEFAULT_LOGIN_REDIRECT } from "@/lib/routes";
import { signIn } from "next-auth/react";

export const GoogleLogin = () => {
  signIn("google", {
    callbackUrl: DEFAULT_LOGIN_REDIRECT,
  });
};
