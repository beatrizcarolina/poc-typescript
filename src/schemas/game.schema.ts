import joi from "joi";
import { InsertGame } from "@/protocols/game.protocol";

export const gameSchema = joi.object<InsertGame>({
    platform: joi.string().required(),
    title: joi.string().required(),
    publisher: joi.string().required(),
    launch: joi.date()

})