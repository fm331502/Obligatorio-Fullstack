import Alumno from "../models/alumno.model.js";
import { PagoService } from "./pago.service.js";

export class AlumnoService {
  static pageLimit = 20;

  static getAlumnosSinPagoActual = async () => {
    const pagos = await PagoService.getPagosEntreFechas();

    page = Number(page) || 1;
    const skip = (page - 1) * this.pageLimit;
    const totalAlumnos = await Alumno.countDocuments({ _id: { $nin: pagos } });
    const totalPages = Math.ceil(totalAlumnos / this.pageLimit);

    const alumnos = await Alumno.find({
      _id: { $nin: pagos },
      activo: true,
    })
      .skip(skip)
      .limit(this.pageLimit);

    return { alumnos, page, totalPages };
  };

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

  static getAll = async (page) => {
    page = Number(page) || 1;
    const skip = (page - 1) * this.pageLimit;
    const totalAlumnos = await Alumno.countDocuments();
    const totalPages = Math.ceil(totalAlumnos / this.pageLimit);
    const alumnos = await Alumno.find().skip(skip).limit(this.pageLimit);
    return { alumnos, page, totalPages };
  };

  static getById = async (id) => {
    validateObjectId(id);
    return await Alumno.findById(id);
  };
}
