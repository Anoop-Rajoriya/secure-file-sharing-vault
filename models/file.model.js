/** File {
 * id: string pk
 * originalName: string
 * storedName: string
 * fileSize: string
 * fileType: string
 * owner: objectId
 * encryption: boolean
 * access: string
 * }
 */

import mongoose, { Schema } from "mongoose";

const FileSchema = Schema(
  {
    originalName: {
      type: String,
      required: true,
    },
    storedName: {
      type: String,
      required: true,
    },
    fileSize: {
      type: Number,
      required: true,
    },
    fileType: {
      type: string,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    encryption: {
      type: Boolean,
      default: false,
    },
    access: {
      type: String,
      enum: ["private", "public"],
      default: "private",
    },
  },
  { timestamps: true }
);

export const FileModel = mongoose.model("File", FileSchema);