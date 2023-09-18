export type Game = {
    id: number;
    platform: string;
    title: string;
    publisher: string;
    launch?: string | Date;
};

export type Games = Game[];
