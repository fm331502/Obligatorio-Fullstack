import { Router } from "express";
import {
  createPago,
  deletePago,
  getPagosByAlumno,
  getPagosByGrupo,
  updatePago,
} from "../controllers/pago.controller.js";
import { createPagoSchema } from "../validators/pagos.validator.js";
import { validateBody } from "../middlewares/validateBody.middleware.js";

const router = Router({ mergeParams: true });

router.post("/", validateBody(createPagoSchema), createPago);
router.put("/:id", validateBody(createPagoSchema), updatePago);
router.delete("/:id", deletePago);
router.get("/alumno/:id", getPagosByAlumno);
router.get("/grupo/:id", getPagosByGrupo);

export default router;
