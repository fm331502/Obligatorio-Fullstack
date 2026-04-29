import { Router } from "express";
import {
  createAlumno,
  deleteAlumno,
  getAlumno,
  getAlumnos,
  updateAlumno,
} from "../controllers/alumno.controller.js";

const router = Router({ mergeParams: true });

router.post("/", createAlumno);
router.put("/:id", updateAlumno);
router.delete("/:id", deleteAlumno);
router.get("/", getAlumno);
router.get("/:id", getAlumnos);

export default router;
