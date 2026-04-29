import { Router } from "express";
import {
  createProfesor,
  deleteProfesor,
  getProfesor,
  getProfesores,
  updateProfesor,
} from "../controllers/profesor.controller.js";
import { validateBody } from "../middlewares/validateBody.middleware.js";
import { createProfesorSchema } from "../validators/profesor.validator.js";

const router = Router({ mergeParams: true });

router.post("/", validateBody(createProfesorSchema), createProfesor);
router.put("/:id", validateBody(createProfesorSchema), updateProfesor);
router.delete("/:id", deleteProfesor);
router.get("/", getProfesores);
router.get("/:id", getProfesor);

export default router;
