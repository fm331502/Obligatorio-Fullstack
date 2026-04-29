import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";
import { validateBody } from "../middlewares/validateBody.middleware.js";
import {
  createUserSchema,
  loginUserSchema,
} from "../validators/user.validator.js";

const router = Router({ mergeParams: true });

router.post("/register", validateBody(createUserSchema), registerUser);
router.post("/login", validateBody(loginUserSchema), loginUser);

export default router;
