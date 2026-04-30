import { isValidObjectId } from "mongoose";
import { BadRequestError } from "./errors.utils.js";

export const validateObjectId = (id) => {
  if (!isValidObjectId(id))
    throw new BadRequestError("Id proporcionado es invalido");
};
