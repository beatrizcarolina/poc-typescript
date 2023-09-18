import { InsertGame } from "@/protocols/game.protocol";
import gameService from "@/services/game.service";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function register(req: Request, res: Response) {
    const newGame = req.body as InsertGame;
    await gameService.create(newGame);
    res.sendStatus(httpStatus.CREATED);
}

async function get(req: Request, res: Response): Promise<Response> {
    const { title } = req.params;
    const games = await gameService.getGame(title);
    return res.sendStatus(httpStatus.CREATED);    
}

async function update() {
    
}

async function remove(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const game = await gameService.getGame(id);

    if(!game) {
        return res.status(httpStatus.NOT_FOUND).send("Game not found");
    }

    await gameService.deleteGame(id);
    res.sendStatus(httpStatus.NO_CONTENT);
}

const gameController = { register, get, update, remove };
export default gameController;