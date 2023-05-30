import { Request, Response } from "express";
import { CreateDishUseCase } from "./CreateDishUseCase";
import { createDishValidate } from "./CreateDishValidate";
import { ZodError } from "zod";
import { AppError } from "../../utils/AppErrpr";

export class CreateDishController{
    private createDishUseCase: CreateDishUseCase;

    constructor(createDishUseCase: CreateDishUseCase) {
        this.createDishUseCase = createDishUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const { image, name, category, ingredients, price, description } = request.body;

        try{
            const data = createDishValidate.parse({
                image,
                name,
                category,
                ingredients,
                price,
                description,
            });
    
            await this.createDishUseCase.execute(data);

            return response.status(201).send();
        }catch (error){
            if (error instanceof ZodError) {
                return response.status(401).json(error.issues.map((issue) => (
                    { message: issue.message }
                )));
            }

            if(error instanceof AppError){
                return response.status(401).json({
                    type: error.type,
                    message: error.message,
                });
            }

            return response.status(500).json({
                message: 'Erro inesperado ao criar prato.'
            });
        }
    }
}