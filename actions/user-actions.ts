"use server";

import { getUserByEmail } from "@/data/user-data";
import { db } from "@/lib/db";

export const createUsername = async ({
  username,
  email,
}: {
  username: string;
  email: string;
}) => {
  if (!email) return;
  if (!username) return { error: "Username is required" };
  const existingUser = await getUserByEmail(email);
  const userId = existingUser?.id;
  await db.user.update({
    where: { id: userId },
    data: {
      username: username,
    },
  });
};
