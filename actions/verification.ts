"use server";
import {
  getUserByEmail,
  getVerificationTokenByToken,
} from "@/lib/data/user-data";
import { db } from "@/lib/db";

export const verifyEmail = async (token: string) => {
  try {
    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken) return { error: "Token has expired!" };
    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) return { error: "Email does not exist" };
    await db.user.update({
      where: { id: existingUser.id },
      data: { emailVerified: new Date() },
    });
    await db.verificationToken.delete({
      where: { id: existingToken.id },
    });
    return { success: "Email verified!" };
  } catch (error: any) {
    return { error: error.message };
  }
};
