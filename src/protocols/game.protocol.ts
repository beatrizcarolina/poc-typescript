export type Game = {
    id: number;
    platform: string;
    title: string;
    publisher: string;
    launch?: string | Date;
};

export type Games = Game[];

export type InsertGame = Omit<Game, "id">;