import { db } from "@/database/database.connection";
import { Game, InsertGame } from "@/protocols/game.protocol";
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

async function update(id: number, newTitle: string, newPublisher: string, newLaunchDate: Date | null, newPlatform: string): Promise<QueryResult<InsertGame>> {
    await db.query<InsertGame>(`UPDATE games SET title = $2, publisher = $3, launch = $4, platform = $5 WHERE id = $1`,
    [id, newTitle, newPublisher, newLaunchDate, newPlatform])
}

async function remove(id: number): Promise<QueryResult<Game>> {
    await db.query<Game>(`DELETE FROM games WHERE id = $1`, [id]);
}

export const gameRepository = { insert, getById, update, remove}