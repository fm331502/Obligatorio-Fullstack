import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {
  createUserService,
  getUserByEmailService,
} from "../services/user.services.js";

const signToken = (email) => {
  return jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

// LOGIN
export const loginUser = (req, res) => {
  const { email, password } = req.body;

  const user = { password: bcrypt.hashSync("password", 12) };
  if (!user) {
    return res.status(401).json({ message: "Credenciales invalidas" });
  }

  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: "Credenciales invalidas" });
  }

  const token = signToken(email);
  res.json({ message: "Usuairo ingresado", token });
};

// REGISTER
export const registerUser = async (req, res) => {
  const { password, email } = req.body;

  const user = getUserByEmailService(email);
  if (user) {
    return res.status(409).json({ message: "El email ya esta registrado" });
  }

  const hash = bcrypt.hashSync(password, 12);
  req.body.password = hash;

  const savedUser = await createUserService(req.body);
  const token = signToken(savedUser._id.toString());

  res.json({ message: "Usuario registado", token });
};
