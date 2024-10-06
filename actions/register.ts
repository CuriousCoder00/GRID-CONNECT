"use server";

import { z } from "zod";
import bcryptjs from "bcryptjs";

import { db } from "@/lib/db";

import { getUserByEmail } from "@/lib/data/user-data";
import { RegisterSchema } from "@/lib/validators/auth.validator";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationMail } from "@/helpers/mailer";

export const Register = async (data: z.infer<typeof RegisterSchema>) => {
  try {
    const { email, name, password } = data;
    const userExists = await getUserByEmail(email);
    console.log(userExists);
    if (userExists){
      return { error: "User already exists" };
    }
    // Hash password
    const hashedPassword = await bcryptjs.hash(
      password,
      await bcryptjs.genSalt(10)
    );
    // Register user
    const uname = email.split("@")[0];
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        username: uname,
      },
    });
    const verificationToken = await generateVerificationToken(email);
    await sendVerificationMail(verificationToken.email, name);
    return { success: "Confirmation mail sent" };
  } catch (error: any) {
    return { error: error.message || "Something went wrong." };
  }
};
