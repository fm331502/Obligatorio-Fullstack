import mongoose, { Schema } from "mongoose";

const pagoSchema = new Schema({
  alumno: { type: Schema.Types.ObjectId, ref: "Alumno", required: true },
  monto: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
  metodo: {
    type: String,
    enum: ["tarjeta", "efectivo", "transferencia"],
    required: true,
  },
});

export default mongoose.model("Pago", pagoSchema);
