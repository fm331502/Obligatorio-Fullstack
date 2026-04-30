import { ProfesorService } from "../services/profesor.service.js";
import { Res } from "../utils/response.utils.js";

export const getProfesores = async (_, res) => {
  const profesores = await ProfesorService.getAll();
  Res.ok(res, "Profesores encontrados", { profesores });
};

export const getProfesor = async (req, res) => {
  const profesor = await ProfesorService.getById(req.params.id);
  Res.ok(res, "Profesor encontrado", { profesor });
};

export const createProfesor = async (req, res) => {
  const profesor = await ProfesorService.create(req.body);
  Res.ok(res, "Profesor creado", { profesor });
};

export const updateProfesor = async (req, res) => {
  const profesor = await ProfesorService.update(req.params.id, req.body);
  Res.ok(res, "Profesor editado", { profesor });
};

export const deleteProfesor = async (req, res) => {
  await ProfesorService.delete(req.params.id);
  Res.ok(res, "Profesor eliminado");
};
