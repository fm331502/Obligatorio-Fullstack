import Alumno from "../models/alumno.model.js";

export class AlumnoService {
  static create = async (data) => {
    const alumno = new Alumno(data);
    await alumno.save();
    return alumno;
  };

  static update = async (id, data) => {
    validateObjectId(id);
    const alumno = await Alumno.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });

    if (!alumno) throw new NotFoundError("Alumno no encontrado");
    return alumno;
  };

  static delete = async (id) => {
    validateObjectId(id);
    return await Alumno.findByIdAndDelete(id);
  };

  static getAll = async () => {
    return await Alumno.find();
  };

  static getById = async (id) => {
    validateObjectId(id);
    return await Alumno.findById(id);
  };
}
