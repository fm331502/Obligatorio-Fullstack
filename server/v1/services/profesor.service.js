import Profesor from "../models/profesor.model.js";

export class ProfesorService {
  static create = async (data) => {
    const profesor = new Profesor(data);
    await profesor.save();
    return profesor;
  };

  static update = async (id, data) => {
    return await Profesor.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });
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
}
