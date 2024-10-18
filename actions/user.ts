"use server";

import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { CredentialsSignin } from "next-auth";
import { signIn } from "@/auth";
import { error } from "console";

const login = async (formData: FormData): Promise<void> => {
  const phone = formData.get("phone") as string;
  const password = formData.get("password") as string;

  try {
    const result = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/home",
      phone,
      password,
    });

    if (result?.error) {
      console.error(result.error);
      redirect("/login?error=1");

      return;
    }

    redirect(result.url || "/home");
  } catch (error) {
    const someError = error as Error;
    console.error("failed:", someError.message);
    redirect("/login?error=1");
  }
};

const register = async (formData: FormData) => {
  const firstName = formData.get("firstname") as string;
  const lastName = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const phone = formData.get("phone") as string;
  const username = formData.get("username") as string;

  if (!firstName || !lastName || !phone || !username || !email || !password) {
    throw new Error("Please fill all fields");
  }

  await connectDB();

  // existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await hash(password, 12);

  await User.create({
    firstName,
    lastName,
    email,
    phone,
    username,
    password: hashedPassword,
  });
  console.log(`User created successfully 🥂`);
  redirect("/login");
};

const fetchAllUsers = async () => {
  await connectDB();
  const users = await User.find({});
  return users;
};

export { register, login, fetchAllUsers };
