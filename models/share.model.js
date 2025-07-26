/** Share {
 * id: string pk
 * file: objectId
 * sharedBy: objectId
 * sharedWithEmail: string
 * accessToken: string
 * expiresAt: date
 * maxDownloads: number
 * downloadCount: number
 * }
 */

import mongoose, { Schema } from "mongoose";

const ShareSchema = Schema(
  {
    file: {
      type: Schema.Types.ObjectId,
      ref: "File",
      required: true,
    },
    sharedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sharedWithEmail: String,
    accessToken: {
      type: String,
      required: true,
    },
    expiresAt: Date,
    maxDownloads: Number,
    downloadCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const ShareModel = mongoose.model("Share", ShareSchema);
