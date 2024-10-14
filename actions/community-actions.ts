"use server";

import { auth } from "@/lib/auth";
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
  const session = await auth();
  if (!session) return null;
  const user = session.user;
  if (!user) return null;
  if (user.id !== userId) return null;
  const communities = await await db.community.findMany({
    where: {
      members: {
        some: {
          userId: session?.user.id,
        },
      },
    },
  });
  return communities;
};

export const getCategories = async () => {
  return db.category.findMany();
};

export const getCommunityById = async (id: string) => {
  const community = await db.community.findUnique({
    where: {
      id,
    },
  });
  return community;
};
