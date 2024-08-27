import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { UserTypes } from "../(types)";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name = "", email, password }: UserTypes = await req.json();
    // Validate email and password
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }
    // check if user already
    const userExists = await db.user.findFirst({
      where: {
        OR: [{ email }, { username: email.split("@")[0] }],
      },
    });
    if (userExists) {
      return NextResponse.json(
        { error: "User already exists with this email or username" },
        { status: 400 }
      );
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Register user
    const uname = email.split("@")[0];
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        username: uname,
        imageUrl: "",
        verifyToken: "",
        forgotPasswordToken: "",
      },
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
