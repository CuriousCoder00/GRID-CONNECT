"use server";
import { db } from "../db";

export const getCommunityById = async (id: string) => {
  try {
    const community = await db.community.findUnique({
      where: {
        id,
      },
    });
    return community;
  } catch {
    return null;
  }
};
