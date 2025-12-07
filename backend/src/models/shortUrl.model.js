import mongoose, { Schema } from "mongoose";

const shortUrlSchema = new Schema({
  full_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);
