import Joi from "joi";
import { joiString, nombreSchema } from "./general.js";

export const createSocioSchema = Joi.object({
  nombre: nombreSchema,
  apellido: joiString("apellido", 3, 20).required(),
});
