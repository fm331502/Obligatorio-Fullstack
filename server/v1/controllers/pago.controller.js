import { PagoService } from "../services/pago.service.js";
import { Res } from "../utils/response.utils.js";

export const createPago = async (req, res) => {
  const pago = await PagoService.create(req.body);
  Res.ok(res, "Pago creado", { pago });
};

export const updatePago = async (req, res) => {
  const pago = await PagoService.update(req.params.id, req.body);
  Res.ok(res, "Pago editado", { pago });
};

export const deletePago = async (req, res) => {
  await PagoService.delete(req.params.id);
  Res.ok(res, "Pago eliminado");
};

export const getPago = async (req, res) => {
  const pago = await PagoService.getById(req.params.id);
  Res.ok(res, "Pago encontrado", { pago });
};

export const getPagosByAlumno = async (req, res) => {
  const pagos = await PagoService.getPagosByAlumno(req.params.id);
  Res.ok(res, "Pagos de alumno encontrados", { pagos });
};
