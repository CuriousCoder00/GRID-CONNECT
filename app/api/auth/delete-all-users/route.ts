import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const users = await db.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}