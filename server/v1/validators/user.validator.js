import Joi from "joi";
import { emailSchema, joiString, nombreSchema } from "./general.validator.js";

export const createUserSchema = Joi.object({
  nombre: nombreSchema,
  email: emailSchema,
  password: joiString(8, 50).required(),
  plan: joiString().default("base"),
});

export const loginUserSchema = Joi.object({
  email: emailSchema,
  password: joiString(8, 50).required(),
});
