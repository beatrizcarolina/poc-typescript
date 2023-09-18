import joi from "joi";
import { Game } from "@/protocols/game.protocol";

export const gameSchema = joi.object<Game>({
    id: joi.number(),
    platform: joi.string().required(),
    title: joi.string().required(),
    publisher: joi.string().required(),
    launch: joi.date()
})