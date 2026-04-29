import { validEmail } from "../libs/utils.js";

export const createUser = (req, res) => {
  const { nombre, email, password } = req.body;
  if (!nombre || !email || !password) {
    return res.status(400).json("Datos invalidos");
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

export const loginUser = (req, res) => {
  res.json({ message: "POST en /user/login" });
};
