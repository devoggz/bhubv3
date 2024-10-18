import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import connectDB from "./lib/db";
import { User } from "./models/User";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Credentials({
      name: "Credentials",

      credentials: {
        phone: { label: "Phone", type: "phone" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const phone = credentials.phone as Number | undefined;
        const password = credentials.password as string | undefined;

        if (!phone || !password) {
          throw new CredentialsSignin("Please provide both email & password");
        }

        await connectDB();

        const user = await User.findOne({ phone }).select(
          "+password +role +username"
        );

        if (!user) {
          throw new Error("Invalid email or password");
        }

        if (!user.password) {
          throw new Error("Invalid email or password");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password did not matched");
        }

        const userData = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          username: user.username,
          role: user.role,
          id: user._id,
        };

        return userData;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.username = token.username as string;
        session.user.role = token.role as string; // Cast token.role as string
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },

    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, name, image, id } = user;
          await connectDB();
          const alreadyUser = await User.findOne({ email });

          if (!alreadyUser) {
            await User.create({ email, name, image, authProviderId: id });
          } else {
            return true;
          }
        } catch (error) {
          throw new Error("Error while creating user");
        }
      }

      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});
