import { Request, Response } from 'express';
import { UploadImageDishUseCase } from './UploadImageDishUseCase';
import { AppError } from '../../utils/AppErrpr';
import { uploadImageDishValidate } from './UploadImageDishValidate';

export class UploadImageDishController {
    private uploadImageDishUseCase: UploadImageDishUseCase;

    constructor(uploadImageDishUseCase: UploadImageDishUseCase) {
        this.uploadImageDishUseCase = uploadImageDishUseCase;
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.params;
        const imageDishFileName = request.file?.filename;

        try {
            const data = uploadImageDishValidate.parse({
                name: String(name),
                image: imageDishFileName
            });
            
            await this.uploadImageDishUseCase.execute(data);

            return response.status(200).send();
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(401).json({
                    type: error.type,
                    message: error.message,
                });
            }
            return response.status(500).json({
                message: 'Erro inesperado ao realizar upload da imagem do prato.'
            });
        }
    }
}