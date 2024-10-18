"use server";
import * as z from "zod";
import { addStageSchema } from "@/schemas";
import prisma from "@/lib/prisma";

export const addstage = async (values: z.infer<typeof addStageSchema>) => {
  console.log(values);

  const validatedFields = addStageSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Oops! All fields are required" };
  }

  const { stageName, county, sub_county, ward, longitude, latitude } =
    validatedFields.data;

  await prisma.stage.create({
    data: {
      stageName,
      county,
      sub_county,
      ward,
      longitude,
      latitude,
    },
  });

  return { success: "Stage Added!." };
};
