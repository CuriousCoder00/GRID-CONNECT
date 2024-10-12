"use server";

import { getUserByEmail } from "@/lib/data/user-data";
import { db } from "@/lib/db";
import { CommunitySchemaType } from "@/lib/validators/community.validator";
import { MemberRole } from "@prisma/client";

export const createCommunity = async (
  email: string,
  data: CommunitySchemaType
) => {
  try {
    const { name, description, category, imageUrl } = data;
    if (!name || !description || !category) {
      return { error: "Missing required fields" };
    }
    const creator = await getUserByEmail(email);
    if (!creator) return { error: "User not found" };
    const creatorId = creator.id;
    await db.community.create({
      data: {
        name,
        description,
        category,
        imageUrl: imageUrl ? imageUrl : null,
        userId: creatorId,
        inviteCode: Math.random().toString(36).substring(7),
        members: {
          create: {
            userId: creatorId,
            role: MemberRole.ADMIN,
          },
        },
      },
    });
    return {
      success:
        "Community creation was successful and community has been added to your profile.",
    };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getCommunitiesByUserId = async (userId: string) => {
  return db.community.findMany({
    where: {
      userId,
    },
  });
};

export const getCategories = async () => {
  return db.category.findMany();
};
