// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User {
    username: string; // Add the username field
    role: string; // Add role field if needed
  }

  interface Session {
    user: {
      id: string;
      username: string; // Add the username field to the session's user
      role: string; // Add role if needed
    } & DefaultSession["user"];
  }

  interface JWT {
    username: string; // Add username to the JWT token
    role: string; // Add role to the JWT token
  }
}
