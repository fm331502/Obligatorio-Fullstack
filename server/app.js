import { notFoundMiddleware } from "./v1/middlewares/notFound.middleware.js";
import { connectDB } from "./v1/config/db.config.js";
import v1Router from "./v1/index.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5500",
    allowedHeaders: ["Content-Type", "Authorizarion"],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", v1Router);

app.use(notFoundMiddleware);

export default app;
