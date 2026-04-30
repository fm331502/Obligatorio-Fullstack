import Joi from "joi";
import {
  cedulaSchema,
  dateSchema,
  joiBoolean,
  nombreSchema,
  telefonoSchema,
} from "./general.validator.js";

export const createAlumnoSchema = Joi.object({
  nombre: nombreSchema,
  cedula: cedulaSchema,
  activo: joiBoolean().default(true),
  telefono: telefonoSchema,
  fechaNacimiento: dateSchema,
});
