"use server";
import { getUserByEmail } from "@/data/user-data";
import { sendPasswordResetLink } from "@/helpers/mailer";

export const sendResetEmail = async ({ email }: { email: string }) => {
  if (!email) return { error: "Please enter a valid email" };
  const user = await getUserByEmail(email);
  if (!user) {
    return { error: "Email not found" };
  }
  if (!user.emailVerified) {
    return { error: "Email not verified" };
  }
  try {
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

