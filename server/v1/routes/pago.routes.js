import { Router } from "express";
import {
  createPago,
  deletePago,
  getPagosByAlumno,
  getPagosByGrupo,
  updatePago,
} from "../controllers/pago.controller.js";

const router = Router({ mergeParams: true });

router.post("/", createPago);
router.put("/:id", updatePago);
router.delete("/:id", deletePago);
router.get("/alumno/:id", getPagosByAlumno);
router.get("/grupo/:id", getPagosByGrupo);

export default router;
