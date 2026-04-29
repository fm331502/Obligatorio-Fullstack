import { Router } from "express";
import authRouter from "./routes/auth.routes.js";
import profesorRouter from "./routes/profesor.routes.js";
import alumnoRouter from "./routes/alumno.routes.js";
import grupoRouter from "./routes/grupo.routes.js";
import pagoRouter from "./routes/pago.routes.js";
import { authenticate } from "./middlewares/authenticate.middleware.js";

const router = Router();

// RUTAS DE AUTENTICACION
router.use("/auth", authRouter);

// RUTAS PROTEGIDAS
router.use(authenticate);

router.use("/profesor", profesorRouter);
router.use("/grupo", grupoRouter);
router.use("/alumno", alumnoRouter);
router.use("/pago", pagoRouter);

export default router;
