import { Game } from "@/protocols/game.protocol";
import gameService from "@/services/game.service";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function register(req: Request, res: Response) {
    const game = req.body as Game;
    await gameService.create(game);
    res.sendStatus(httpStatus.CREATED);
}

async function get(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const game = await gameService.getGame(Number(id));
    return res.send(game);    
}

async function update(req: Request, res: Response) {
    const game = req.body as Game;
    await gameService.updateGame(game);
    res.sendStatus(httpStatus.CREATED);
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