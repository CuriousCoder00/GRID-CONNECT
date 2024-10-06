import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email is invalid").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is invalid").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const EmailVerificationSchema = z.object({
  email: z.string().email("Email is invalid").min(1, "Email is required"),
});

export const ResetPasswordSchema = z.object({
  email: z.string().email("Email is invalid").min(1, "Email is required"),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(1, "Password is required"),
});

export const ProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is invalid").min(1, "Email is required"),
});

export const PasswordSchema = z.object({
  oldPassword: z.string().min(1, "Old Password is required"),
  newPassword: z.string().min(1, "New Password is required"),
});

export const EmailSchema = z.object({
  email: z.string().email("Email is invalid").min(1, "Email is required"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type EmailVerificationSchemaType = z.infer<
  typeof EmailVerificationSchema
>;
