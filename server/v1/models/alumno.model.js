import mongoose, { Schema } from "mongoose";

const alumnoSchema = new Schema({
  nombre: { type: String, required: true, unique: true },
  grupo: { type: Schema.Types.ObjectId, ref: "Grupo" },
  activo: { type: Boolean, default: true },
  telefono: { type: String, required: true, unique: true },
  fechaNacimiento: { type: Date, required: true },
});

export default mongoose.model("Alumno", alumnoSchema);
