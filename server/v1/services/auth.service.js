import { AuthError, ConflictError } from "../utils/errors.utils.js";
import { UserService } from "./user.services.js";
import bcrypt from "bcryptjs";

export class AuthService {
  static login = async (email, password) => {
    const user = await UserService.getByEmail(email);
    if (!user) throw new AuthError("Credenciales invalidas");
    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) throw new AuthError("Credenciales invalidas");
    return user;
  };

  static register = async (data) => {
    const user = await UserService.getByEmail(data.email);
    if (user) throw new ConflictError("El email ya esta registrado");
    const hash = bcrypt.hashSync(data.password, 12);
    data.password = hash;
    return await UserService.create(data);
  };
}
