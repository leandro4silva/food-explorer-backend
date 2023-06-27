import { Request, Response } from "express";
import { ShowFavoriteUseCase } from "./ShowFavoriteUseCase";

export class ShowFavoriteController{
    private showFavoriteUseCase: ShowFavoriteUseCase;

    constructor(showFavoriteUseCase: ShowFavoriteUseCase){
        this.showFavoriteUseCase = showFavoriteUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const {dishId, userId} = request.params;

        try{
            const dish = await this.showFavoriteUseCase.execute(dishId, userId);
            return response.status(200).json(dish);
        }catch(error){
            return response.status(500).json({
                message: 'Erro inesperado ao lista prato.'
            });
        }
    }
}