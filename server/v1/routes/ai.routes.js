import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware.js";
import { getModels, useGemini25Flash } from "../controllers/ai.controller.js";

const router = Router({ mergeParams: true });

router.get("/", getModels);
router.post("/", useGemini25Flash);

export default router;
