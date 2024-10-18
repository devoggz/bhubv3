"use server";
import * as z from "zod";
import { addUserPostSchema } from "@/schemas";
import prisma from "@/lib/prisma";

export const adduserpost = async (
  values: z.infer<typeof addUserPostSchema>
) => {
  console.log(values);

  const validatedFields = addUserPostSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Oops! All fields are required" };
  }

  const { title, category, videoURL } = validatedFields.data;

  await prisma.userPost.create({
    data: {
      title,
      category,
      videoURL,
    },
  });

  return { success: "Post Added!." };
};
