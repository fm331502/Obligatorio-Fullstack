import { Router } from "express";
import userRouter from "./routes/user.routes.js";
import profesorRouter from "./routes/profesor.routes.js";
import alunnoRouter from "./routes/alumno.routes.js";
import grupoRouter from "./routes/grupo.routes.js";
import pagoRouter from "./routes/pago.routes.js";

const router = Router();

router.use("/user", userRouter);
router.use("/profesor", profesorRouter);
router.use("/grupo", profesorRouter);
router.use("/alumno", profesorRouter);
router.use("/pago", pagoRouter);

export default router;
