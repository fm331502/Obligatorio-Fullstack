import { Router } from "express";
import {
  createUser,
  loginUser,
  upgadeUserPlan,
} from "../controllers/user.controller.js";
import { validateBody } from "../middlewares/validateBody.middleware.js";
import {
  createUserSchema,
  loginUserSchema,
} from "../validators/user.validator.js";

const router = Router({ mergeParams: true });

router.post("/", validateBody(createUserSchema), createUser);
router.post("/login", validateBody(loginUserSchema), loginUser);
router.post("/upgrade", upgadeUserPlan);

export default router;
