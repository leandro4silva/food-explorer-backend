import { Request, Response } from "express";
import { EditDishUseCase } from "./EditDishUseCase";
import { ZodError } from "zod";
import { AppError } from "../../utils/AppErrpr";
import { editDishValidate } from "./EditDishValidate";


export class EditDishController{
    private editDishUseCase: EditDishUseCase 
    
    constructor(editDishUseCase: EditDishUseCase){
        this.editDishUseCase = editDishUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const { id, image, name, category, ingredients, price, description } = request.body;

        try{
            const data = editDishValidate.parse({
                id,
                image,
                name,
                category,
                ingredients,
                price,
                description,
            });
    
            await this.editDishUseCase.execute(data);

            return response.status(200).send();
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

            console.log(error)

            return response.status(500).json({
                message: 'Erro inesperado ao criar prato.'
            });
        }
    }

}