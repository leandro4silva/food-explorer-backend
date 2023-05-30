import { Request, Response } from "express";
import { ZodError } from "zod";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { createUserValidate } from "./CreateUserValidate";
import { AppError } from "../../utils/AppErrpr";

export class CreateUserController {
    private createUserUseCase: CreateUserUseCase;

    constructor(createUserUseCase: CreateUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try {
            const data = createUserValidate.parse({
                name,
                email,
                password
            });

            await this.createUserUseCase.execute(data);

            return response.status(201).send();
        } catch (error) {
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
                message: 'Erro inesperado ao criar usuário.'
            });
        }
    }
}