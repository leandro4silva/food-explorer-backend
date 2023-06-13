import { Request, Response } from "express"
import { ListDishsUseCase } from "./ListDishsUseCase"

export class ListDishsController{
    private listDishsUseCase: ListDishsUseCase

    constructor(listDishsUseCase: ListDishsUseCase){
        this.listDishsUseCase = listDishsUseCase
    }

    async handle(request: Request, response: Response): Promise <Response>{
        const listDishs = await this.listDishsUseCase.execute();

        return response.status(200).json(listDishs)
    }
}