import jwt from "jsonwebtoken";

// LOGIN
export const loginUser = (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign({ email }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  res.json({ message: "Usuairo ingresado", usuario: req.body, token });
};

// REGISTER
export const registerUser = (req, res) => {
  const data = req.body;
  res.json({ message: "Usuario registado", usuario: data });
};
