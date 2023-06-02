import { UploadImageDishUseCase } from "./UploadImageDishUseCase";
import { Request, Response } from 'express';

export class UploadImageDishController{
    private uploadImageUseCase: UploadImageDishUseCase; 

    constructor(uploadImageUseCase: UploadImageDishUseCase){
        this.uploadImageUseCase = uploadImageUseCase;       
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const { user_id } = request.user;
        const imageDishFileName = request.file.filename;

        return response.status(200).send(imageDishFileName);
    }
}