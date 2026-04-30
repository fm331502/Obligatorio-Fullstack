import { AlumnoService } from "../services/alumno.service.js";
import { Res } from "../utils/response.utils.js";

export const getAlumnosSinPagoActual = async (req, res) => {
  const { page } = req.query;
  const alumnos = AlumnoService.getAlumnosSinPagoActual(page);
  Res.ok(res, "Alumnos sin pagos encontrados", { alumnos });
};

export const createAlumno = async (req, res) => {
  const alumno = await AlumnoService.create(user._id, req.body);
  Res.ok(res, "Alumno creado", { alumno });
};

export const updateAlumno = async (req, res) => {
  const alumno = await AlumnoService.update(req.params.id, req.body);
  Res.ok(res, "Alumno editado", { alumno });
};

export const deleteAlumno = async (req, res) => {
  await AlumnoService.delete(req.params.id);
  Res.ok(res, "Alumno eliminado");
};

export const getAlumno = async (req, res) => {
  const alumno = await AlumnoService.getById(req.params.id);
  Res.ok(res, "Alumno encontrado", { alumno });
};

export const getAlumnos = async (req, res) => {
  const { page } = req.query;
  const alumnos = await AlumnoService.getAll(page, limit);
  Res.ok(res, "Alumnos encontrados", { alumnos });
};
