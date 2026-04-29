import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

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
  res.json({ message: "Usuairo ingresado", usuario: req.body, token });
};

// REGISTER
export const registerUser = (req, res) => {
  const { password, email } = req.body;

  const user = null;
  if (user) {
    return res.status(409).json({ message: "El email ya esta registrado" });
  }

  const hash = bcrypt.hashSync(password, 12);
  const token = signToken(email);

  res.json({ message: "Usuario registado", usuario: req.body, token });
};
