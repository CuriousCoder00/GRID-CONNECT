import nodemailer from "nodemailer";
import { UserTypes } from "@/app/api/auth/(types)";
import { APP_NAME } from "@/constants/TextConsts";
import verificationMailHTML from "./TEMPLATES/VERIFY_EMAIL";
import resetPassMailHTML from "./TEMPLATES/RESET_PASS";

export async function sendVerificationMail(user: UserTypes) {
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
    console.log("verifyToken", user.verifyToken);
    const verificationLink = `${process.env.NEXTAUTH_URL}/api/auth/verifyEmail?token=${user.verifyToken}`;
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Verify your email address",
      html: verificationMailHTML(verificationLink, user.name),
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
    const resetPasswordLink = `${process.env.NEXTAUTH_URL}/api/auth/resetPassword?token=${user.forgotPasswordToken}`;
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Reset your password",
      html: resetPassMailHTML(resetPasswordLink, user.name),
    });
    return info;
  } catch (error: any) {
    return error.message;
  }
}
