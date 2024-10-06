import { DEFAULT_LOGIN_REDIRECT } from "@/lib/validators/routes";
import { signIn } from "next-auth/react";

export const GoogleLogin = () => {
  signIn("google", {
    callbackUrl: DEFAULT_LOGIN_REDIRECT,
  });
};
