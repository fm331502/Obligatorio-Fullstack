import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plan: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
