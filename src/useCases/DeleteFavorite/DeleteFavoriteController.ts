import { Request, Response } from "express";
import { DeleteFavoriteUseCase } from "./DeleteFavoriteUseCase";

export class DeleteFavoriteController{
    private deleteFavoriteUseCase: DeleteFavoriteUseCase

    constructor(deleteFavoriteUseCase: DeleteFavoriteUseCase){
        this.deleteFavoriteUseCase = deleteFavoriteUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const {userId, dishId} = request.query;

        try{
            await this.deleteFavoriteUseCase.execute(String(userId), String(dishId));
            return response.status(200).send();
        }catch(error){
            return response.status(500).json({
                message: 'Erro inesperado ao remover favorito.'
            });
        }
    }
}