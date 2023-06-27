import { ShowDishUseCase } from "./ShowDishUseCase";
import { Request, Response } from "express";

export class ShowDishController{
    private showDishUseCase: ShowDishUseCase

    constructor(showDishUseCase: ShowDishUseCase){
        this.showDishUseCase = showDishUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;

        try{
            const dish = await this.showDishUseCase.execute(id);
            return response.status(200).json(dish);
        }catch(error){
            return response.status(500).json({
                message: 'Erro inesperado ao lista prato.'
            });
        }

        
    }
}