import { Request, Response } from "express";
import { ZodError } from 'zod';
import { userValidate } from "../../schemas/user.schema";

export class CreateUserController{
    create(request: Request, response: Response){
        try{
            const data = userValidate.parse(request.body);

            return response.status(200).json();
        
        }catch(error){
            if(error instanceof ZodError){
                return response.status(400).json(error.issues.map((issue) => ({ message: issue.message})))
            }
        }
    }

    async index(request: Request, response: Response){
        // try{
        //     const users = await prisma.user.findMany();
        //     response.json(users)
        // }catch(error){
        //     console.log(error);
        // }
    }
}