import { gameRepository } from "@/repositories/game.repository";
import { Game } from "@/protocols/game.protocol";

function create(game: Game) {
    return gameRepository.insert(game);
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