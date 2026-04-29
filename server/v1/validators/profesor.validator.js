import Joi from "joi";
import {
  cedulaSchema,
  dateSchema,
  nombreSchema,
  telefonoSchema,
} from "./general.validator";

export const createProfesorSchema = Joi.object({
  nombre: nombreSchema,
  cedula: cedulaSchema,
  telefono: telefonoSchema,
  fechaInicio: dateSchema,
});
