import { GrupoService } from "../services/grupo.service.js";
import { Res } from "../utils/response.utils.js";

export const getGroupWithAlumnosAndPagoActual = async (req, res) => {
  const grupo = GrupoService.getGroupWithAlumnosAndPagoActual(req.params.id);
  Res.ok(res, "Grupo con alumnos y pagos encontrados", { grupo });
};

export const createGrupo = async (req, res) => {
  const grupo = await GrupoService.create(req.body);
  Res.ok(res, "Grupo creado", { grupo });
};

export const updateGrupo = async (req, res) => {
  const grupo = await GrupoService.update(req.params.id, req.body);
  Res.ok(res, "Grupo editado", { grupo });
};

export const deleteGrupo = async (req, res) => {
  await GrupoService.delete(req.params.id);
  Res.ok(res, "Grupo eliminado");
};

export const getGrupo = async (req, res) => {
  const grupo = await GrupoService.getById(req.params.id);
  Res.ok(res, "Grupo encontrado", { grupo });
};

export const getGrupos = async (_, res) => {
  const grupos = await GrupoService.getAll();
  Res.ok(res, "Grupos encontrados", { grupos });
};
