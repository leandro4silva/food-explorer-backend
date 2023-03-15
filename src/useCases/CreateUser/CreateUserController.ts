import { Request, Response } from "express";
import { ZodError } from "zod";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { createUserValidate } from "./CreateUserValidate";

export class CreateUserController {
    private createUserUseCase: CreateUserUseCase;

    constructor(createUserUseCase: CreateUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try {
            createUserValidate.parse({
                name,
                email,
                password
            });

            await this.createUserUseCase.execute({
                name,
                email,
                password
            });

            return response.status(201).send();
        } catch (error) {
            if (error instanceof ZodError) {
                return response.status(401).json(error.issues.map((issue) => (
                    { message: issue.message }
                )));
            }
            if(error instanceof Error){
                return response.status(401).json({
                    message: error.message
                });
            }
            return response.status(500).json({
                message: 'Erro inesperado ao criar usuário.'
            });
        }
    }
}