import { Router } from "express";
import { upgradePlan } from "../controllers/user.controller.js";

const router = Router({ mergeParams: true });

router.post("/", upgradePlan);

export default router;
