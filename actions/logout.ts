"use server";

import { signOut } from "@/auth";

export default async function logout() {
  try {
    await signOut();
  } catch (error) {
    console.error(error);
  }
}
