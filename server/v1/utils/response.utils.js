import { isHandledError } from "./errors.utils.js";

export class Res {
  static ok = (res, message, data) => {
    return res.json({ message, ...data });
  };

  static error = (res, error) => {
    if (isHandledError(error)) {
      return res.status(error.status).json({ message: error.message });
    } else {
      if (process.env.NODE_ENV === "development") console.error(error);
      return res.status(500).json({ message: "Error de servidor interno" });
    }
  };
}
