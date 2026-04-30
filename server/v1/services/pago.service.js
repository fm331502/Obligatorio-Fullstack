import Pago from "../models/pago.model.js";
import { AlumnoService } from "./alumno.service.js";
import { GrupoService } from "./grupo.service.js";

export class PagoService {
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

  static getPagosByGrupo = async (grupoId) => {
    validateObjectId(grupoId);
    const grupo = await GrupoService.getById(grupoId);
    if (!grupo) throw new NotFoundError("Grupo no encontrado");
    // TERMINAR QUIERY
    return await Pago.find({ alumno: grupoId });
  };

  static getAll = async () => {
    return await Pago.find();
  };

  static getById = async (id) => {
    validateObjectId(id);
    return await Pago.findById(id);
  };
}
