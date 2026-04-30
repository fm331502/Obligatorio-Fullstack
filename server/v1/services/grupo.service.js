import Grupo from "../models/grupo.model.js";

export class GrupoService {
  static create = async (data) => {
    const grupo = new Grupo(data);
    await grupo.save();
    return grupo;
  };

  static update = async (id, data) => {
    validateObjectId(id);
    const grupo = await Grupo.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });

    if (!grupo) throw new NotFoundError("Grupo no encontrado");
    return grupo;
  };

  static delete = async (id) => {
    validateObjectId(id);
    return await Grupo.findByIdAndDelete(id);
  };

  static getAll = async () => {
    return await Grupo.find();
  };

  static getById = async (id) => {
    validateObjectId(id);
    return await Grupo.findById(id);
  };
}
