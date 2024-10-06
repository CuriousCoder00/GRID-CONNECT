import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z
    .string()
    .min(4, "Username is required and must be of at least 3 characters"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
});

export type ProfileSchemaType = z.infer<typeof ProfileSchema>;
