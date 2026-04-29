import { Router } from "express";
import { getUser, getUsers, postUser } from "../controllers/user.controller";

const router = Router({ mergeParams: true });

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", postUser);

export default router;
