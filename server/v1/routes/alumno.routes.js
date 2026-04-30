import { Router } from "express";
import {
  createAlumno,
  deleteAlumno,
  getAlumno,
  getAlumnos,
  getAlumnosSinPagoActual,
  updateAlumno,
} from "../controllers/alumno.controller.js";
import { validateBody } from "../middlewares/validateBody.middleware.js";
import { createAlumnoSchema } from "../validators/alumno.validator.js";
import { loggedUserMiddleware } from "../middlewares/loggedUser.middleware.js";

const router = Router({ mergeParams: true });

router.post(
  "/",
  validateBody(createAlumnoSchema),
  loggedUserMiddleware,
  createAlumno,
);
router.put("/:id", validateBody(createAlumnoSchema), updateAlumno);
router.delete("/:id", deleteAlumno);
router.get("/sin-pago-actual", getAlumnosSinPagoActual);
router.get("/", getAlumno);
router.get("/:id", getAlumnos);

export default router;
