import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { UserTypes } from "../(types)";

export async function POST(req: NextRequest) {
  const { name, email, password }: UserTypes = await req.json();
  // Validate email and password
  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }
  // Register user
  const user = await db.user.create({
    data: {
      name,
      email,
      password,
      userId: "",
      username: "",
      imageUrl: "",
      forgotPasswordToken: "",
      forgotPasswordTokenExpiry: "",
      verifyToken: "",
      verifyTokenExpiry: "",
    },
  });
  return NextResponse.json({ user }, { status: 201 });
}
