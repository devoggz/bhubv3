"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

interface UserProps {
  email: string;
  username: string;
  bikeNumber: string;
  riderType: string;
  points: number;
  stage: string;
}

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/profile" });
  revalidatePath("/profile");
};

export const logout = async () => {
  await signOut({ redirectTo: "/login" });
  revalidatePath("/login");
};

const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUser = async ({
  email,
  username,
  bikeNumber,
  riderType,
  points,
  stage,
}: UserProps) => {
  try {
    const user = await prisma.user.findMany({
      where: {
        email,
        username,
        bikeNumber,
        riderType,
        points,
        stage,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const loginWithCreds = async (formData: FormData) => {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
    role: "USER",
    redirectTo: "/home",
  };

  const existingUser = await getUserByEmail(formData.get("email") as string);
  console.log(existingUser);

  try {
    await signIn("credentials", rawFormData);
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
  revalidatePath("/");
};
