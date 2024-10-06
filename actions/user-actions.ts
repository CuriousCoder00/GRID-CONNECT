"use server";

import { getUserByEmail } from "@/lib/data/user-data";
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
  try {
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
    return { success: "User profile updated successfully." };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const changePassword = async (
  email: string,
  data: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }
) => {
  const { currentPassword, newPassword, confirmNewPassword } = data;
  const passwordMatch = newPassword === confirmNewPassword;
  if (!passwordMatch) return { mismatch: "Password do not match" };
  const user = await getUserByEmail(email);
  if (!user) return { error: "User not found" };
  const userId = user?.id;

  if (!user?.password) return { error: "User password not found" };

  const match = await bcrypt.compare(currentPassword, user.password);

  if (!match) {
    return { error: "Invalid credentials" };
  }

  const hashedPassword = await bcrypt.hash(
    newPassword,
    await bcrypt.genSalt(10)
  );
  await db.user.update({
    where: { id: userId },
    data: {
      password: hashedPassword,
    },
  });

  return { success: "Password changed successfully" };
};
