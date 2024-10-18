import * as z from "zod";

export const loginSchema = z.object({
  phoneNumber: z.string(),
  password: z.string().min(6, {
    message: "Password is Required",
  }),
});

export const registerSchema = z.object({
  name: z.string(),
  phoneNumber: z.string().min(10),
  username: z.string(),
  idNumber: z.string(),
  riderType: z.string(),
  bikeNumber: z.string(),
  terms: z.boolean().default(false),
  ward: z.string(),
  stage: z.string(),
  county: z.string(),
  subCounty: z.string(),

  password: z.string().min(6, { message: "Password is Required" }),
});

export const addStageSchema = z.object({
  stageName: z.string(),
  county: z.string(),
  sub_county: z.string(),
  ward: z.string(),
  longitude: z.string(),
  latitude: z.string(),
});

export const addPostSchema = z.object({
  title: z.string(),
  category: z.string(),
  content: z.string(),
  thumbnailURL: z.string(),
  videoURL: z.string(),
});

export const addUserPostSchema = z.object({
  title: z.string(),
  category: z.string(),
  videoURL: z.string(),
  content: z.string().optional(),
  thumbnailURL: z.string().optional(),
});
