import Joi from "joi";
import { dateSchema, joiNumber, joiString } from "./general.validator";

export const createPagoSchema = Joi.object({
  alumnoId: joiString().required(),
  fecha: dateSchema,
  metodo: Joi.valid("tarjeta", "efectivo", "transferencia"),
  monto: joiNumber(0),
});
