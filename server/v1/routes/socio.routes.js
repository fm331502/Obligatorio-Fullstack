import { Router } from "express";
import {
  createSocio,
  deleteSocio,
  getSocio,
  getSocios,
  updateSocio,
} from "../controllers/socio.controller.js";

const router = Router({ mergeParams: true });

router.post("/", createSocio);
router.get("/", getSocios);
router.get("/:id", getSocio);
router.put("/:id", updateSocio);
router.delete("/:id", deleteSocio);

export default router;
