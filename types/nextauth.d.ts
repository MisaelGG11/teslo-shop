import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      email: string;
      emailVerified?: boolean;
      name: string;
      image?: string;
      role: string;
    } & DefaultSession["user"];
  }
}