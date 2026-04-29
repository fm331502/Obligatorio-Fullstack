import { validEmail } from "../libs/utils.js";

// REGISTER
export const createUser = (req, res) => {
  const { nombre, email, password } = req.body;
  if (!nombre || !email || !password) {
    return res.status(400).json("Datos incompletos");
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json("Password tiene que tener al menos 8 caracteres");
  }

  if (!validEmail(email)) {
    return res.status(400).json("Email invalido");
  }

  res.json({ message: "POST en /user", body: req.body });
};

// LOGIN
export const loginUser = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("Datos incompletos");
  }

  res.json({ message: "POST en /user/login" });
};
