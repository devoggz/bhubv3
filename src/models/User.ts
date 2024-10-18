import mongoose from "mongoose";

// Schema definition
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true, // Automatically trim whitespaces
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email uniqueness
      lowercase: true, // Automatically store emails in lowercase
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"], // Regex for validating email format
    },
    password: {
      type: String,
      required: true,
      select: false, // Password will not be selected by default in queries
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Enum for predefined roles
      default: "user",
    },
    image: {
      type: String, // Optional field for storing profile image URL
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10,15}$/, "Invalid phone number"], // Basic regex validation for phone number
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Adding index for optimized queries
userSchema.index({ username: 1 });
userSchema.index({ email: 1 });

// Model creation or reuse
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
