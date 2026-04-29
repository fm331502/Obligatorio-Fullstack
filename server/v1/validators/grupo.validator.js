import Joi from "joi";
import { joiString, nombreSchema } from "./general.validator.js";

export const createGrupoSchema = Joi.object({
  nombre: nombreSchema,
  profesorId: joiString().required(),
});
