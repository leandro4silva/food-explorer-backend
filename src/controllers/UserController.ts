import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { AppError } from "../utils/AppError";
import { z } from 'zod';

export class UserController{
    create(request: Request, response: Response){
        const createUser = z.object({
            name: z.string({
                required_error: "Name is required",
                invalid_type_error: "Name must be a string"
            })
        });

        const { name } = createUser.parse(request.body);
    
        response.send(name);
    }

    async index(request: Request, response: Response){
        try{
            const users = await prisma.user.findMany();
            response.json(users)
        }catch(error){
            console.log(error);
            throw new AppError("Error Inesperado ao listar todos os usuarios");
        }
    }
}