import NextAuth, { User as NextAuthUser } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/lib/auth.config";

import { getAccountByUserId, getUserByID } from "./data/user-data";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      });
    },
    async signIn({ user }) {
      const existingUser = await getUserByID(user.id!);
      if (!existingUser?.username) {
        await db.user.update({
          where: { id: user.id },
          data: {
            username: existingUser?.email.split("@")[0],
          },
        });
      }
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") {
        const existingUser = await getUserByID(user.id!);
        db.user.update({
          where: { id: user.id },
          data: {
            username: existingUser?.email.split("@")[0],
          },
        });
        return true;
      }
      // Prevent login without email verification
      const existingUser = await getUserByID(user.id!);
      if (!existingUser?.emailVerified) return false;
      return true;
    },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.username = token.username;
        session.user.email = token.email ?? "";
        session.user.isOAuth = token.isOAuth;
      }
      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserByID(token.sub);
      if (!existingUser) return token;
      const existingAccount = await getAccountByUserId(existingUser.id);

      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.username =
        existingUser.username ?? existingUser.email.split("@")[0];
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  ...authConfig,
});