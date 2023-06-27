"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDishController = void 0;
const CreateDishValidate_1 = require("./CreateDishValidate");
const zod_1 = require("zod");
const AppErrpr_1 = require("../../utils/AppErrpr");
class CreateDishController {
    constructor(createDishUseCase) {
        this.createDishUseCase = createDishUseCase;
    }
    async handle(request, response) {
        const { image, name, category, ingredients, price, description } = request.body;
        try {
            const data = CreateDishValidate_1.createDishValidate.parse({
                image,
                name,
                category,
                ingredients,
                price,
                description,
            });
            await this.createDishUseCase.execute(data);
            return response.status(201).send();
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
exports.CreateDishController = CreateDishController;
