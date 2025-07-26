/** Autid {
 * id: string pk
 * file: objectId
 * ipAddress: string
 * userAgent: string
 * downloadedAt: date
 * }
 */

import mongoose, { Schema } from "mongoose";

const AuditSchema = Schema(
  {
    file: {
      type: Schema.Types.ObjectId,
      ref: "File",
      required: true,
    },
    ipAddress: String,
    userAgent: String,
    downloadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const AuditModel = mongoose.model("Audit", AuditSchema);
