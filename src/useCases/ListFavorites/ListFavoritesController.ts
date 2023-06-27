import { Request, Response } from "express";
import { ListFavoritesUseCase } from "./ListFavoritesUseCase";

export class ListFavoritesController{
    private listFavoritesUseCase: ListFavoritesUseCase;

    constructor(listFavoritesUseCase: ListFavoritesUseCase){
        this.listFavoritesUseCase = listFavoritesUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const { userId } = request.query;

        try{
            const listFavoritesDishs = await this.listFavoritesUseCase.execute(String(userId));
            return response.status(200).json(listFavoritesDishs);
        }catch(error){
            return response.status(500).json({
                message: 'Erro inesperado ao listar pratos favoritados.'
            });
        }
    }
}