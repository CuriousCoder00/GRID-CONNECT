import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z
    .string()
    .min(4, "Username is required and must be of at least 3 characters"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
});

export const ChangePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(6, "Password should be of at least 6 characters"),
  newPassword: z.string().min(6, "Password should be of at least 6 characters"),
  confirmNewPassword: z
    .string()
    .min(6, "Password should be of at least 6 characters"),
});

export type ProfileSchemaType = z.infer<typeof ProfileSchema>;
export type ChangePasswordSchemaType = z.infer<typeof ChangePasswordSchema>;
