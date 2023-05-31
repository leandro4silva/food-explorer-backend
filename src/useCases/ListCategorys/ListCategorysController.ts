import { Request, Response } from "express";
import { ListCategorysUseCase } from "./ListCategorysUseCase";

export class ListCategorysController{
    private listCategorysUseCase: ListCategorysUseCase;

    constructor(listCategorysUseCase: ListCategorysUseCase){
        this.listCategorysUseCase = listCategorysUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        try{
            const allCategory = await this.listCategorysUseCase.execute(); 
            return response.status(200).json(allCategory);
        }catch(error){
            return response.status(500).json({
                message: 'Erro inesperado ao listar as categorias.'
            });
        }
    }
}