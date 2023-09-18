import { Router } from "express";
import gameRouter from "@/routes/game.route";

const router = Router();
router.use(gameRouter);

export default router;