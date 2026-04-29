import Joi from "joi";
import { joiString, nombreSchema } from "./general.validator.js";

export const createUserSchema = Joi.object({
  nombre: nombreSchema,
  // email: Joi.email,
  password: joiString("password", 8, 50).required(),
});

export const loginUserSchema = Joi.object({
  nombre: nombreSchema,
  // email: Joi.email,
});
