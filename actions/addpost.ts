"use server";
import * as z from "zod";
import { addPostSchema } from "@/schemas";
import prisma from "@/lib/prisma";

export const addpost = async (values: z.infer<typeof addPostSchema>) => {
  console.log(values);

  const validatedFields = addPostSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Oops! All fields are required" };
  }

  const { title, category, thumbnailURL, videoURL, content } =
    validatedFields.data;

  await prisma.post.create({
    data: {
      title,
      category,
      thumbnailURL,
      videoURL,
      content,
    },
  });

  return { success: "Post Added!." };
};
