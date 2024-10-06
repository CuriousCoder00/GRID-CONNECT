"use server";

import { getUserByEmail } from "@/lib/data/user-data";
import { db } from "@/lib/db";

export const getUserActivities = async (email: string) => {
  const user = await getUserByEmail(email);
  if (!user) return { error: "User not found" };
  const activities = await db.activity.findMany({
    where: {
      userId: user.id,
    },
  });
  if (!activities) return { error: "Activities not found" };
  return { activities };
};

export const storeUserActivity = async (email: string, activity: any) => {
  const user = await getUserByEmail(email);
  if (!user) return { error: "User not found" };
  const newActivity = await db.activity.create({
    data: {
      ...activity,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });
  return { newActivity };
};

export const getRecentActivities = async () => {
  const activities = await db.activity.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });
  if (!activities) return { error: "Activities not found" };
  return { activities };
};
