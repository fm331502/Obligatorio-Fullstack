import mongoose, { Schema } from "mongoose";

const profesorSchema = new Schema({
  nombre: { type: String, required: true },
  telefono: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
});

export default mongoose.model("Profesor", profesorSchema, "profesores");
