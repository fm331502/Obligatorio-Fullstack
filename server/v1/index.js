import { Router } from "express";
import userRouter from "./routes/user.routes.js";
import socioRouter from "./routes/socio.routes.js";

const router = Router();

router.use("/user", userRouter);
router.use("/socio", socioRouter);

export default router;
