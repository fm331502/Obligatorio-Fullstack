import Joi from "joi";
import {
  cedulaSchema,
  dateSchema,
  nombreSchema,
  telefonoSchema,
} from "./general.validator.js";

export const createProfesorSchema = Joi.object({
  nombre: nombreSchema,
  cedula: cedulaSchema,
  telefono: telefonoSchema,
  fechaInicio: dateSchema,
});
