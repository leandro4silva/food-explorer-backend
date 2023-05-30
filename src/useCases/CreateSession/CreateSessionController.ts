import { Request, Response} from "express";
import { ZodError } from "zod";
import { CreateSessionUseCase } from "./CreateSessionUseCase";
import { createSessionValidate } from "../CreateSession/CreateSessionValidate";

export class CreateSessionController{
    private createSessionUseCase: CreateSessionUseCase;

    constructor(createSessionUseCase: CreateSessionUseCase){
        this.createSessionUseCase = createSessionUseCase;
    }
    
    async handle(request: Request, response: Response): Promise<Response>{
        const {email, password, isAdmin} = request.body;
        
        try{
            createSessionValidate.parse({
                email,
                password,
                isAdmin
            });
            
            const userWithToken = await this.createSessionUseCase.execute({
                email, 
                password,
                isAdmin
            });
            
            return response.status(201).json(userWithToken);
        }catch(error){
            if(error instanceof ZodError){
                return response.status(400).json(error.issues.map((issue) => (
                    { message: issue.message }
                )));
            }
            if(error instanceof Error){
                return response.status(401).json({
                    message: error.message
                });
            }
            return response.status(500).json({
                message: 'Erro inesperado ao criar a sessão.'
            });
        }

    }
}