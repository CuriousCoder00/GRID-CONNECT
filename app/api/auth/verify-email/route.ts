import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getUserByEmail, getVerificationTokenByToken } from "@/lib/data/user-data";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;

    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken)
      return NextResponse.json({ error: "Token has expired!" });
    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser)
      return NextResponse.json({ error: "Email does not exist" });
    await db.user.update({
      where: { id: existingUser.id },
      data: { emailVerified: new Date() },
    });
    await db.verificationToken.delete({
      where: { id: existingToken.id },
    });
    return NextResponse.json({ success: "Email verified!" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
