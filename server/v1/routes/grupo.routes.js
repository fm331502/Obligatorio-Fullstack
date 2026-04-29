import { Router } from "express";
import {
  createGrupo,
  deleteGrupo,
  getGrupo,
  getGrupos,
  updateGrupo,
} from "../controllers/grupo.controller.js";
import { createGrupoSchema } from "../validators/grupo.validator.js";
import { validateBody } from "../middlewares/validateBody.middleware.js";

const router = Router({ mergeParams: true });

router.post("/", validateBody(createGrupoSchema), createGrupo);
router.put("/:id", validateBody(createGrupoSchema), updateGrupo);
router.delete("/:id", deleteGrupo);
router.get("/", getGrupos);
router.get("/:id", getGrupo);

export default router;
