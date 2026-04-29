import Joi from "joi";

export const joiString = (param, min, max) => {
  return Joi.string()
    .trim()
    .min(min)
    .max(max)
    .messages({
      "string.base": `${param} debe ser un texto`,
      "string.empty": `${param} no puede estar vacio`,
      "string.min": `${param} debe tener al menos {#limit} caracteres`,
      "string.max": `${param} no puede tener mas de {#limit} caracteres`,
      "any.required": `${param} es obligatorio`,
    });
};

export const joiNumber = (param, min, max) => {
  return Joi.string()
    .trim()
    .min(min)
    .max(max)
    .messages({
      "number.base": `${param} debe ser un numero`,
      "number.empty": `${param} no puede estar vacio`,
      "number.min": `${param} debe tener ser mas de {#limit}`,
      "number.max": `${param} no puede superar {#limit}`,
      "any.required": `${param} es obligatorio`,
    });
};

export const joiBoolean = (param) => {
  return Joi.boolean().messages({
    "boolean.base": `${param} debe ser un booleano`,
    "any.required": `${param} es obligatorio`,
  });
};

export const nombreSchema = joiString("nombre", 3, 20).required();
