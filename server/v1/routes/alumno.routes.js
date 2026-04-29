import { Router } from "express";
import {
  createAlumno,
  deleteAlumno,
  getAlumno,
  getAlumnos,
  updateAlumno,
} from "../controllers/alumno.controller.js";
import { validateBody } from "../middlewares/validateBody.middleware.js";
import { createAlumnoSchema } from "../validators/alumno.validator.js";

const router = Router({ mergeParams: true });

router.post("/", validateBody(createAlumnoSchema), createAlumno);
router.put("/:id", validateBody(createAlumnoSchema), updateAlumno);
router.delete("/:id", deleteAlumno);
router.get("/", getAlumno);
router.get("/:id", getAlumnos);

export default router;
