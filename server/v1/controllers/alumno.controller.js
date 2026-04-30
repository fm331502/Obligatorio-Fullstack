import { GrupoService } from "../services/alumno.service.js";
import { Res } from "../utils/response.utils.js";

export const createAlumno = async (req, res) => {
  const alumno = await GrupoService.create(req.body);
  Res.ok(res, "Alumno creado", { alumno });
};

export const updateAlumno = async (req, res) => {
  const alumno = await GrupoService.update(req.params.id, req.body);
  Res.ok(res, "Alumno editado", { alumno });
};

export const deleteAlumno = async (req, res) => {
  await GrupoService.delete(req.params.id);
  Res.ok(res, "Alumno eliminado");
};

export const getAlumno = async (req, res) => {
  const alumno = await GrupoService.getById(req.params.id);
  Res.ok(res, "Alumno encontrado", { alumno });
};

export const getAlumnos = async (_, res) => {
  const grupos = await GrupoService.getAll();
  Res.ok(res, "Alumnos encontrados", { alumnos });
};
