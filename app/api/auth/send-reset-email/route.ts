import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getUserByEmail, getVerificationTokenByToken } from "@/data/user-data";
import { sendPasswordResetLink } from "@/helpers/mailer";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    // const existingToken = await getUserByEmail(email);
    // if (!existingToken)
    //   return NextResponse.json({ error: "Email not found" });
    const existingUser = await getUserByEmail(email);
    if (!existingUser)
      return NextResponse.json({ error: "Email does not exist" });

    if (existingUser.emailVerified) {
      sendPasswordResetLink(email, existingUser.name);
    }
    return NextResponse.json({ success: "Email verified!" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
