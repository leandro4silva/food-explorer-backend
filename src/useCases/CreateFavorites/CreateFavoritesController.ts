import { Request, Response } from "express";
import { CreateFavoritesUseCase } from "./CreateFavoritesUseCase";

export class CreateFavoritesController{
    private createFavoritesUseCase: CreateFavoritesUseCase

    constructor(createFavoritesUseCase: CreateFavoritesUseCase){
        this.createFavoritesUseCase = createFavoritesUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const {userId, dishId} = request.body;
        
        try{
            await this.createFavoritesUseCase.execute(userId, dishId);
            return response.status(201).send();
        }catch(error){
            return response.status(500).json({
                message: 'Erro inesperado ao favoritar prato.'
            });
        }

    }
}