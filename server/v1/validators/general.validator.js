import Joi from "joi";

export const joiString = (min, max) => {
  const schema = Joi.string().trim();
  if (min) schema.min(min);
  if (max) schema.max(max);
  schema.messages({
    "string.base": `El campo {#label} debe ser un texto`,
    "string.empty": `El campo {#label} no puede estar vacio`,
    "string.min": `El campo {#label} debe tener al menos {#limit} caracteres`,
    "string.max": `El campo {#label} no puede tener mas de {#limit} caracteres`,
    "any.required": `El campo {#label} es obligatorio`,
  });

  return schema;
};

export const joiEmail = () => {
  return Joi.string().trim().email().messages({
    "string.base": `El campo {#label} debe ser un texto`,
    "string.empty": `El campo {#label} no puede estar vacio`,
    "any.required": `El campo {#label} es obligatorio`,
  });
};

export const joiNumber = (min, max) => {
  const schema = Joi.number();
  if (min) schema.min(min);
  if (max) schema.max(max);
  schema.messages({
    "number.base": `El campo {#label} debe ser un numero`,
    "number.empty": `El campo {#label} no puede estar vacio`,
    "number.min": `El campo {#label} debe tener ser mas de {#limit}`,
    "number.max": `El campo {#label} no puede superar {#limit}`,
    "any.required": `El campo {#label} es obligatorio`,
  });

  return schema;
};

export const joiBoolean = () => {
  return Joi.boolean().messages({
    "boolean.base": `El campo {#label} debe ser un booleano`,
    "any.required": `El campo {#label} es obligatorio`,
  });
};

export const nombreSchema = joiString(3, 20).required();
export const cedulaSchema = Joi.string()
  .trim()
  .pattern(/^\d{7,8}-\d$/)
  .required()
  .messages({
    "string.base": "El campo {#label} debe ser un texto",
    "string.empty": "El campo {#label} no puede estar vacio",
    "string.pattern.base": "El campo {#label} debe tener formato 1234567-8",
    "any.required": "El campo {#label} es obligatorio",
  })
  .label("cédula");

export const emailSchema = Joi.string()
  .trim()
  .email({ tlds: { allow: false } })
  .required()
  .messages({
    "string.base": "El campo {#label} debe ser un texto",
    "string.empty": "El campo {#label} no puede estar vacio",
    "string.email": "El campo {#label} debe ser un email válido",
    "any.required": "El campo {#label} es obligatorio",
  })
  .label("email");

export const telefonoSchema = Joi.string()
  .trim()
  .pattern(/^\d{9}$/)
  .required()
  .messages({
    "string.base": "El campo {#label} debe ser un texto",
    "string.empty": "El campo {#label} no puede estar vacio",
    "string.pattern.base": "El campo {#label} debe tener exactamente 9 dígitos",
    "any.required": "El campo {#label} es obligatorio",
  })
  .label("teléfono");

export const dateSchema = Joi.date()
  .required()
  .messages({
    "date.base": "El campo {#label} debe ser una fecha válida",
    "date.format": "El campo {#label} debe tener un formato válido",
    "date.greater": "El campo {#label} debe ser mayor a {#limit}",
    "date.less": "El campo {#label} debe ser menor a {#limit}",
    "date.min": "El campo {#label} debe ser posterior a {#limit}",
    "date.max": "El campo {#label} debe ser anterior a {#limit}",
    "any.required": "El campo {#label} es obligatorio",
  })
  .label("fecha");
