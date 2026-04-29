import { createUserSchema } from "../validations/user.schema.js";

// REGISTER
export const createUser = (req, res) => {
  const { value, error } = createUserSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res
      .status(400)
      .json({ message: "Error en validacion", error: error.details });
  }

  res.json({ message: value });
};

// LOGIN
export const loginUser = (req, res) => {
  const { value, error } = createUserSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    return res
      .status(400)
      .json({ message: "Error en validacion", error: error.details });
  }

  res.json({ message: value });
};
