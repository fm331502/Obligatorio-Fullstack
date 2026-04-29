import { Router } from "express";

const router = Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.json({ message: "GET en /usuario" });
});

export default router;
