import jwt from "jsonwebtoken";
import { Res } from "../utils/response.utils.js";
import { AuthError } from "../utils/errors.utils.js";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return Res.error(res, new AuthError("No hay token de autenticacion"));
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return Res.error(res, new AuthError("Token de autenticacion invalido"));
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return Res.error(res, new AuthError("Token de autenticacion invalido"));
    }
    req.decoded = decoded;
    next();
  });
};
