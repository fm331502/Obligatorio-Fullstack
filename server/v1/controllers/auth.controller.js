import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserService } from "../services/user.services";

const signToken = (email) => {
  return jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

// LOGIN
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserService.getByEmail(email);
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

  const user = UserService.getByEmail(email);
  if (user) {
    return res.status(409).json({ message: "El email ya esta registrado" });
  }

  const hash = bcrypt.hashSync(password, 12);
  req.body.password = hash;

  const savedUser = await UserService.create(req.body);
  const token = signToken(savedUser._id.toString());

  res.json({ message: "Usuario registado", token });
};
