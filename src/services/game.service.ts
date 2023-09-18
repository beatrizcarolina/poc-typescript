import { gameRepository } from "@/repositories/game.repository";
import { Game, InsertGame } from "@/protocols/game.protocol";

function create(newGame: InsertGame) {
    return gameRepository.insert(newGame);
}

function updateGame(game: Game) {
    return gameRepository.update(game);
}

function getGame(id: number): Promise<Game> {
    return gameRepository.getById(id);
}

function deleteGame(id: number) {
    return gameRepository.remove(id);
}

const gameService = { create, getGame, updateGame, deleteGame }
export default gameService;