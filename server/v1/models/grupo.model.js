import mongoose, { Schema } from "mongoose";

const grupoSchema = new Schema({
  nombre: { type: String, required: true },
  profesor: { type: Schema.Types.ObjectId, ref: "Profesor" },
});

export default mongoose.model("Grupo", grupoSchema);
