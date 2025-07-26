/** User {
 *  id: string pk
 *  username: string
 *  email: string
 *  password: string
 * }
 */

import mongoose, { Schema } from "mongoose";

const UserSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowecase: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", UserSchema);
