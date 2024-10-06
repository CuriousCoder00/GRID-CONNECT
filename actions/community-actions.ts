"use server";

import { getUserByEmail } from "@/lib/data/user-data";
import { db } from "@/lib/db";

export const createCommunity = async ({
  email,
  name,
  description,
  category,
  imageUrl,
}: {
  email: string;
  name: string;
  description: string;
  category: string;
  imageUrl?: string;
}) => {
  if (!name || !description || !category) {
    return { error: "Missing required fields" };
  }
  const creator = await getUserByEmail(email);
  if (!creator) return { error: "User not found" };
  const creatorId = creator.id;
  const community = await db.community.create({
    data: {
      name,
      description,
      category,
      imageUrl: imageUrl ? imageUrl : null,
      userId: creatorId,
      inviteCode: Math.random().toString(36).substring(7),
    },
  });
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
