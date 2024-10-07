"use server";

import { getUserByEmail } from "@/lib/data/user-data";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const updateUser = async (
  currentEmail: string,
  data: {
    name: string;
    username: string;
    email: string;
  }
) => {
  const { name, username, email } = data;
  try {
    const user = await getUserByEmail(currentEmail);
    if (!user) return { error: "User not found" };
    if (user.email !== email) {
      const userExists = await getUserByEmail(email);
      if (userExists) return { error: "User with this email already exists" };
    }
    if (user.username !== username) {
      const userExists = await db.user.findFirst({
        where: {
          username,
        },
      });
      if (userExists) return { error: "Username already taken" };
    }
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
