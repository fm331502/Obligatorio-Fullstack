import { createUserSchema } from "../validators/user.validator.js";

// REGISTER
export const createUser = (req, res) => {
  const data = req.body;
  res.json({ message: data });
};

// LOGIN
export const loginUser = (req, res) => {
  const data = req.body;
  res.json({ message: data });
};
