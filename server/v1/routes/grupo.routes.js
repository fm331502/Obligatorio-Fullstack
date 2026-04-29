import { Router } from "express";
import {
  createGrupo,
  deleteGrupo,
  getGrupo,
  getGrupos,
  updateGrupo,
} from "../controllers/grupo.controller.js";

const router = Router({ mergeParams: true });

router.post("/", createGrupo);
router.put("/:id", updateGrupo);
router.delete("/:id", deleteGrupo);
router.get("/", getGrupos);
router.get("/:id", getGrupo);

export default router;
