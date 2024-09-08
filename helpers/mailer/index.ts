import nodemailer from "nodemailer";
import { UserTypes } from "@/types";
import verificationMailHTML from "@/emails/VERIFY_EMAIL";
import resetPassMailHTML from "@/emails/RESET_PASS";
import { getVerificationTokenByEmail } from "@/data/user-data";

export async function sendVerificationMail(
  email: string,
  token: string,
  name: string
) {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const verificationToken = await getVerificationTokenByEmail(email);
    const verificationLink = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${verificationToken?.token}`;
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify your email address",
      html: verificationMailHTML(verificationLink, name),
    });
    return info;
  } catch (error: any) {
    return error.message;
  }
}

export async function sendPasswordResetLink(user: UserTypes) {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("forgotPasswordToken", user.forgotPasswordToken);
    const resetPasswordLink =
      `${process.env.NEXTAUTH_URL}/reset-password?token=${user.forgotPasswordToken}` ||
      "";
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email || "",
      subject: "Reset your password",
      html: resetPassMailHTML(resetPasswordLink, user.name || ""),
    });
    return info;
  } catch (error: any) {
    return error.message;
  }
}
