import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import { UserTypes } from "@/types";
import { getUserByEmail } from "@/lib/data/user-data";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationMail } from "@/helpers/mailer";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      password,
    }: { name: string; email: string; password: string } = await req.json();
    // check if user already
    const userExists = await getUserByEmail(email);
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
      },
    });
    const verificationToken = await generateVerificationToken(email);
    await sendVerificationMail(
      verificationToken.email,
      name
    );
    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
