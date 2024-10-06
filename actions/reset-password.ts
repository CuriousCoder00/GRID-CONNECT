"use server";
import { getPasswordResetTokenByToken, getUserByEmail } from "@/lib/data/user-data";
import { sendPasswordResetLink } from "@/helpers/mailer";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const sendResetEmail = async ({ email }: { email: string }) => {
  if (!email) return { error: "Please enter a valid email" };
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return { error: "Email not found" };
    }
    if (!user.emailVerified) {
      return { error: "Email not verified" };
    }
    if (user) {
      if (user.name) {
        await sendPasswordResetLink(email, user.name);
      } else {
        return { error: "User name is missing" };
      }
      return { success: "Email sent successfully" };
    }
  } catch (error) {
    return { error: "Error sending email" };
  }
};

export const ResetPassword = async ({
  token,
  password,
}: {
  token: string;
  password: { newPassword: string; repeatNewPassword: string };
}) => {
  if (!token) return { error: "Token is missing" };
  // check for min password length
  if (password.newPassword.length < 8) {
    return { error: "Password must be at least 8 characters long" };
  }
  try {
    const existingToken = await getPasswordResetTokenByToken(token);
    if (!existingToken) return { error: "Token is missing" };
    if (new Date(existingToken.expiresAt) < new Date())
      return { error: "Token has expired" };
    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) return { error: "User not found" };
    const hashedPassword = await bcrypt.hash(password.newPassword, 10);
    await db.user.update({
      where: { id: existingUser.id },
      data: { password: hashedPassword },
    });
    await db.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
    return { success: "Password updated successfully" };
  } catch (error) {
    return { error: "Error updating password" };
  }
};
