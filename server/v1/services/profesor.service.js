import Profesor from "../models/profesor.model.js";
import { ConflictError, NotFoundError } from "../utils/errors.utils.js";

export class ProfesorService {
  static create = async (data) => {
    const existing = this.findByName(data.nombre);
    if (existing)
      throw new ConflictError("Ya existe un profesor con ese nombre");
    const profesor = new Profesor(data);
    await profesor.save();
    return profesor;
  };

  static update = async (id, data) => {
    const profesor = await Profesor.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });

    if (!profesor) throw new NotFoundError("Profesor no encontrado");
    return profesor;
  };

  static delete = async (id) => {
    return await Profesor.findByIdAndDelete(id);
  };

  static getAll = async () => {
    return await Profesor.find();
  };

  static getById = async (id) => {
    return await Profesor.findById(id);
  };

  static findByName = async (name) => {
    return await Profesor.findOne({ nombre: name });
  };
}
