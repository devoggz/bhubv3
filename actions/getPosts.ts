"use server";
import prisma from "@/lib/prisma";

export const getPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      select: {
        title: true,
        category: true,
        thumbnailURL: true,
        videoURL: true,
        content: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const getPostById = async (id: number) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      select: {
        title: true,
        category: true,
        thumbnailURL: true,
        videoURL: true,
        content: true,
      },
    });
    return post;
  } catch (error) {
    console.error("Error fetching post by id:", error);
    return null;
  }
};
