import { Request, Response } from "express"
import { ListDishsUseCase } from "./ListDishsUseCase"

export class ListDishsController{
    private listDishsUseCase: ListDishsUseCase

    constructor(listDishsUseCase: ListDishsUseCase){
        this.listDishsUseCase = listDishsUseCase
    }

    async handle(request: Request, response: Response): Promise <Response>{
        const {dish} = request.query;

        try{
            const listDishs = await this.listDishsUseCase.execute(String(dish));
            return response.status(200).json(listDishs)
        }catch(error){
            return response.status(500).json({
                message: 'Erro inesperado ao listar pratos.'
            });
        }

    }
}