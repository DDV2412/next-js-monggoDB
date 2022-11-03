import mongoose from "mongoose";
import { user } from "../interfaces/user";
import crypto from "crypto";
const Schema = mongoose.Schema;

let UserSchema = new Schema<user>({
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    maxlength: 48,
    minlength: 8,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 64,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 64,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 64,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  resetPasswordToken: String,
  resetPasswordExpired: Date,
});

export default mongoose.model("users", UserSchema);
