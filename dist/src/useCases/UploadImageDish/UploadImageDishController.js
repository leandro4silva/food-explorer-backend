"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImageDishController = void 0;
const AppErrpr_1 = require("../../utils/AppErrpr");
const UploadImageDishValidate_1 = require("./UploadImageDishValidate");
class UploadImageDishController {
    constructor(uploadImageDishUseCase) {
        this.uploadImageDishUseCase = uploadImageDishUseCase;
    }
    async handle(request, response) {
        const { name } = request.params;
        const imageDishFileName = request.file?.filename;
        try {
            const data = UploadImageDishValidate_1.uploadImageDishValidate.parse({
                name: String(name),
                image: imageDishFileName
            });
            await this.uploadImageDishUseCase.execute(data);
            return response.status(200).send();
        }
        catch (error) {
            if (error instanceof AppErrpr_1.AppError) {
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
exports.UploadImageDishController = UploadImageDishController;
