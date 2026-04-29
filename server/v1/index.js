import { Router } from "express";
import authRouter from "./routes/auth.routes.js";
import profesorRouter from "./routes/profesor.routes.js";
import alumnoRouter from "./routes/alumno.routes.js";
import grupoRouter from "./routes/grupo.routes.js";
import pagoRouter from "./routes/pago.routes.js";
import { authenticate } from "./middlewares/authenticate.middleware.js";

const router = Router();

// RUTAS PUBLICAS
router.use("/auth", authRouter);

// AUTH MIDDLEWARE
router.use(authenticate);

// RUTAS PROTEGIDAS
router.use("/profesor", profesorRouter);
router.use("/grupo", grupoRouter);
router.use("/alumno", alumnoRouter);
router.use("/pago", pagoRouter);

export default router;
