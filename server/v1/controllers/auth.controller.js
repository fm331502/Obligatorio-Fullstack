import jwt from "jsonwebtoken";
import { Res } from "../utils/response.utils.js";
import { AuthService } from "../services/auth.service.js";

const signToken = (email) => {
  return jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthService.login(email, password);
    const token = signToken(user._id.toString());
    Res.ok(res, "Usuario ingresado", { token });
  } catch (error) {
    Res.error(res, error);
  }
};

// REGISTER
export const registerUser = async (req, res) => {
  try {
    const user = await AuthService.register(req.body);
    const token = signToken(user._id.toString());
    Res.ok(res, "Usuario registrado", { token });
  } catch (error) {
    Res.error(res, error);
  }
};
