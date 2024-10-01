"use server";

import { signOut } from "@/auth";

export default async function logout() {
  try {
    await signOut({
      redirect: true,
      redirectTo: "/",
    });
  } catch (error) {
    console.error(error);
  }
}
