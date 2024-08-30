import { NextRequest, NextResponse } from "next/server";
import { UserTypes } from "../(types)";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const reqBody: UserTypes = await request.json();
    const { verifyToken } = reqBody;

    const user = await db.user.findFirst({ where: { verifyToken } });

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }
    console.log(user.isVerified);

    await db.user.update({
      where: { id: user.id },
      data: { isVerified: true },
    });
    console.log(user.isVerified);
    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
