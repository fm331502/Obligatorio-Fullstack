import Pago from "../models/pago.model.js";
import { getCurrentMonthStartAndEndDate } from "../utils/dates.utils.js";
import { AlumnoService } from "./alumno.service.js";

export class PagoService {
  static getPagosDelMesActual = async () => {
    const { start, end } = getCurrentMonthStartAndEndDate();
    return await Pago.distinct("alumno", {
      fecha: { $gte: start, $lt: end },
    });
  };

  static create = async (data) => {
    const pago = new Pago(data);
    await pago.save();
    return pago;
  };

  static update = async (id, data) => {
    validateObjectId(id);
    const pago = await Pago.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });

    if (!pago) throw new NotFoundError("Pago no encontrado");
    return pago;
  };

  static delete = async (id) => {
    validateObjectId(id);
    return await Pago.findByIdAndDelete(id);
  };

  static getPagosByAlumno = async (alumnoId) => {
    validateObjectId(alumnoId);
    const alumno = await AlumnoService.getById(alumnoId);
    if (!alumno) throw new NotFoundError("Alumno no encontrado");
    return await Pago.find({ alumno: alumnoId });
  };

  static getAll = async () => {
    return await Pago.find();
  };

  static getById = async (id) => {
    validateObjectId(id);
    return await Pago.findById(id);
  };
}
