import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import { UserTypes } from "../(types)";
import { sendPasswordResetLink, sendVerificationMail } from "@/helpers/mailer";

export async function POST(req: NextRequest) {
  try {
    const { name = "", email, password }: UserTypes = await req.json();
    // check if user already
    const userExists = await db.user.findFirst({
      where: {
        OR: [{ email }],
      },
    });
    if (userExists) {
      return NextResponse.json(
        { error: "User already exists." },
        { status: 400 }
      );
    }
    // Validate email and password
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(
      password,
      await bcryptjs.genSalt(10)
    );
    // Register user
    const uname = email.split("@")[0];
    let user = await db.user.create({
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
    console.log(user);
    // Send verification email
    const token = await bcryptjs.hash(user.id, 10);
    user = await db.user.update({
      where: { id: user.id },
      data: { verifyToken: token },
    });
    await sendVerificationMail(user);
    await sendPasswordResetLink(user);
    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
