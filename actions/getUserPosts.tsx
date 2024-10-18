"use server";
import prisma from "@/lib/prisma";

export const getUserPosts = async () => {
  try {
    const userposts = await prisma.userPost.findMany({
      select: {
        id: true,
        title: true,
        category: true,
        content: true,
        videoURL: true,
        thumbnailURL: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return userposts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
