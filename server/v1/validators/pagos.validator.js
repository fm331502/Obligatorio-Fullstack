import Joi from "joi";
import { dateSchema, joiNumber, joiString } from "./general.validator.js";

export const createPagoSchema = Joi.object({
  alumnoId: joiString().required(),
  fecha: dateSchema,
  metodo: joiString().valid("tarjeta", "efectivo", "transferencia"),
  monto: joiNumber(0),
});
