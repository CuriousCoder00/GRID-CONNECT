import { z } from "zod";

export const CommunitySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  imageUrl: z.string().optional(),
});

export const JoinCommunitySchema = z.object({
  inviteCode: z.string().min(1, "Invite code is required"),
});

export type CommunitySchemaType = z.infer<typeof CommunitySchema>;
export type JoinCommunitySchemaType = z.infer<typeof JoinCommunitySchema>;
