import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "@/lib/db";
import { UserTypes } from "@/types";
import { sendVerificationMail } from "@/helpers/mailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password }: UserTypes = await req.json();
    // check if user already
    const userExists = await db.user.findFirst({
      where: { email },
    });
    if (userExists) {
      return NextResponse.json(
        { error: "User already exists." },
        { status: 400 }
      );
    }
    // Validate email and password
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }
    if (!password) {
      return NextResponse.json({ error: "Password required" }, { status: 400 });
    }
    if (!name) {
      return NextResponse.json({ error: "Name required" }, { status: 400 });
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
      },
    });
    console.log(user);
    const token = jwt.sign({ id: user.id }, "secret"); // Generate token using jwt.sign()
    user = await db.user.update({
      where: { id: user.id },
      data: { verifyToken: token },
    });
    // Send verification email
    await sendVerificationMail(user);
    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
