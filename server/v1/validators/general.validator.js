import Joi from "joi";

export const joiString = (param, min, max) => {
  return Joi.string().trim().min(min).max(max).messages({
    "string.base": `El campo {#label} debe ser un texto`,
    "string.empty": `El campo {#label} no puede estar vacio`,
    "string.min": `El campo {#label} debe tener al menos {#limit} caracteres`,
    "string.max": `El campo {#label} no puede tener mas de {#limit} caracteres`,
    "any.required": `El campo {#label} es obligatorio`,
  });
};

export const joiEmail = (param) => {
  return Joi.string().trim().email().messages({
    "string.base": `El campo {#label} debe ser un texto`,
    "string.empty": `El campo {#label} no puede estar vacio`,
    "any.required": `El campo {#label} es obligatorio`,
  });
};

export const joiNumber = (param, min, max) => {
  return Joi.string().trim().min(min).max(max).messages({
    "number.base": `El campo {#label} debe ser un numero`,
    "number.empty": `El campo {#label} no puede estar vacio`,
    "number.min": `El campo {#label} debe tener ser mas de {#limit}`,
    "number.max": `El campo {#label} no puede superar {#limit}`,
    "any.required": `El campo {#label} es obligatorio`,
  });
};

export const joiBoolean = (param) => {
  return Joi.boolean().messages({
    "boolean.base": `El campo {#label} debe ser un booleano`,
    "any.required": `El campo {#label} es obligatorio`,
  });
};
export const nombreSchema = joiString("nombre", 3, 20).required();
