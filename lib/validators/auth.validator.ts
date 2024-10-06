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

export const NewPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, "Password is required and must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password is required and must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
  });

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
export type EmailVerificationSchemaType = z.infer<
  typeof EmailVerificationSchema
>;
export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;
export type NewPasswordSchemaType = z.infer<typeof NewPasswordSchema>;