import { Res } from "../utils/response.utils.js";

export const errorMiddleware = (error, req, res, next) => {
  Res.error(res, error);
};
