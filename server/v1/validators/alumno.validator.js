import Joi from "joi";
import {
  cedulaSchema,
  dateSchema,
  joiBoolean,
  joiString,
  nombreSchema,
  telefonoSchema,
} from "./general.validator";

export const createAlumnoSchema = Joi.object({
  nombre: nombreSchema,
  cedula: cedulaSchema,
  foto: joiString().optional(),
  activo: joiBoolean().default(true),
  teleforno: telefonoSchema,
  fechaNacimiento: dateSchema,
});
