import { AuthError, NotFoundError } from "../utils/errors.utils.js";
import { UserService } from "../services/user.services.js";

export const loggedUserMiddleware = async (req, _, next) => {
  if (!req.decoded.id) throw new AuthError("Usuario no detectado");
  const user = await UserService.getById(req.decoded.id);
  if (!user) throw new NotFoundError("Usuario no encontrado");
  req.user = user;
  next();
};
