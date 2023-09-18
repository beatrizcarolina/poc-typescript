import gameController from "@/controllers/game.controller";
import validateSchema from "@/midllewares/validateSchema";
import { gameSchema } from "@/schemas/game.schema";
import { Router } from "express";

const gameRouter = Router();
gameRouter.get("/games/:id", gameController.get);
gameRouter.post("/games", validateSchema(gameSchema), gameController.register);
gameRouter.put("/games", validateSchema(gameSchema), gameController.update);
gameRouter.delete("/games/:id", gameController.remove);

export default gameRouter;