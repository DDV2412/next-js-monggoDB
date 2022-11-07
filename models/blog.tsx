import mongoose from "mongoose";
import { Blog } from "../interfaces/blog";
const Schema = mongoose.Schema;

let blogSchema = new Schema<Blog>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    name: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

export default mongoose.model("blogs", blogSchema);
