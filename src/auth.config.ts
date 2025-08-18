import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { z } from "zod";
import prisma from "./lib/prisma";
import bcrypt from "bcryptjs";

export const authConfig: NextAuthConfig = {
  providers: [],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  // callbacks: {
  //   authorized({ auth, request: { nextUrl } }) {
  //     const isLoggedIn = !!auth?.user;
  //     const isOnDashboard = nextUrl.pathname.startsWith("/");
  //     if (isOnDashboard) {
  //       if (isLoggedIn) return true;
  //       return false; // Redirect unauthenticated users to login page
  //     } else if (isLoggedIn) {
  //       return Response.redirect(new URL("/", nextUrl));
  //     }
  //     return true;
  //   },
  // },
};

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !(await bcrypt.compare(password, user.password))) {
          return null;
        }

        // User without password
        const { password: _, ...userWithoutPassword } = user;

        return userWithoutPassword;
      },
    }),
  ],
});
