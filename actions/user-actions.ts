"use server";

import { getUserByEmail } from "@/data/user-data";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

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

export const updateUser = async ({
  name,
  username,
  email,
}: {
  name: string;
  username: string;
  email: string;
}) => {
  const user = await getUserByEmail(email);
  const userId = user?.id;
  await db.user.update({
    where: { id: userId },
    data: {
      name,
      username,
      email,
    },
  });
};

export const changePassword = async ({
  email,
  password,
}: {
  email: string;
  password: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  };
}) => {
  const user = await getUserByEmail(email);
  const userId = user?.id;
  if (
    !password.currentPassword ||
    !password.newPassword ||
    !password.confirmNewPassword
  ) {
    return { error: "Password is required" };
  }
  if (!user?.password) return { error: "User password not found" };
  const match = await bcrypt.compare(password.currentPassword, user.password);
  if (!match) {
    return { error: "Invalid credentials" };
  }
  await db.user.update({
    where: { id: userId },
    data: {
      password: await bcrypt.hash(password?.newPassword, 10),
    },
  });
  return { success: "Password changed successfully" };
};
