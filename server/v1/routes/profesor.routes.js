import { Router } from "express";
import {
  createProfesor,
  deleteProfesor,
  getProfesor,
  getProfesores,
  updateProfesor,
} from "../controllers/profesor.controller.js";

const router = Router({ mergeParams: true });

router.post("/", createProfesor);
router.put("/:id", updateProfesor);
router.delete("/:id", deleteProfesor);
router.get("/", getProfesores);
router.get("/:id", getProfesor);

export default router;
