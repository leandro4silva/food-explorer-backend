import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController{
    private createUserUseCase: CreateUserUseCase;

    constructor(createUserUseCase: CreateUserUseCase){
        this.createUserUseCase = createUserUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, email, password } = request.body;
        
        try{
            await this.createUserUseCase.execute({
                name,
                email,
                password
            });

            return response.status(201).send();
        }catch(error){
            return response.status(400).json({
                message: 'Unexpected error.'
            })
        }
    }
}