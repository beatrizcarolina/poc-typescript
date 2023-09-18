import { db } from "@/database/database.connection";
import { Game } from "@/protocols/game.protocol";
import { QueryResult } from "pg";

async function insert(game: Game): Promise<void> {
    const { title, publisher, launch, platform } = game;
    await db.query<Game> (`INSERT INTO games ("title", "publisher", "launch", "platform") 
    VALUES ($1, $2, $3, $4)`, 
    [title, publisher, launch, platform]);
}

async function getById(id: number): Promise<Game> {
    const game = await db.query<Game> (`SELECT * FROM games WHERE id=$1;`, [id]);
    return game.rows[0];    
}

async function update(game: Game): Promise<void> {
    console.log(game.id);
    await db.query<Game>(`UPDATE games SET title = $2, publisher = $3, launch = $4, platform = $5 WHERE id = $1`,
    [game.id, game.title, game.publisher, game.launch, game.platform])
}

async function remove(id: number): Promise<void> {
    await db.query<Game>(`DELETE FROM games WHERE id = $1`, [id]);
}

export const gameRepository = { insert, getById, update, remove}