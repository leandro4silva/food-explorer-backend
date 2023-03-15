import { Request, Response} from "express";
import { CreateSessionUseCase } from "./CreateSessionUseCase";

export class CreateSessionController{
    private createSessionUseCase: CreateSessionUseCase;

    constructor(createSessionUseCase: CreateSessionUseCase){
        this.createSessionUseCase = createSessionUseCase;
    }
    
    async handle(request: Request, response: Response): Promise<Response>{
        const {email, password} = request.body;

        await this.createSessionUseCase.execute({
            email, 
            password
        });

        return response.send('OK');
    }
}