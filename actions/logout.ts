"use server";

import { signOut } from "@/auth";

export default async function logout() {
  try {
    await signOut({
      redirect: false,
      redirectTo: "/",
    });
  } catch (error) {
    console.error(error);
  }
}
