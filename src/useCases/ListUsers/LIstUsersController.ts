import { ListUsersUseCase } from "./ListUsersUseCase";
import { Request, Response } from "express";

export class ListUsersController{
    private listUserUseCase: ListUsersUseCase;

    constructor(listUsersUseCase: ListUsersUseCase){
        this.listUserUseCase = listUsersUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response>{
        try{
            const allUsers = await this.listUserUseCase.execute();
            return response.status(200).json(allUsers);
        }catch(error){
            return response.status(500).json({
                message: 'Erro inesperado ao listar pratos.'
            });
        }
    }
}