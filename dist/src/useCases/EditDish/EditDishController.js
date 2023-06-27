"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditDishController = void 0;
const zod_1 = require("zod");
const AppErrpr_1 = require("../../utils/AppErrpr");
const EditDishValidate_1 = require("./EditDishValidate");
class EditDishController {
    constructor(editDishUseCase) {
        this.editDishUseCase = editDishUseCase;
    }
    async handle(request, response) {
        const { id, image, name, category, ingredients, price, description } = request.body;
        try {
            const data = EditDishValidate_1.editDishValidate.parse({
                id,
                image,
                name,
                category,
                ingredients,
                price,
                description,
            });
            await this.editDishUseCase.execute(data);
            return response.status(200).send();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                return response.status(401).json(error.issues.map((issue) => ({ message: issue.message })));
            }
            if (error instanceof AppErrpr_1.AppError) {
                return response.status(401).json({
                    type: error.type,
                    message: error.message,
                });
            }
            console.log(error);
            return response.status(500).json({
                message: 'Erro inesperado ao criar prato.'
            });
        }
    }
}
exports.EditDishController = EditDishController;
