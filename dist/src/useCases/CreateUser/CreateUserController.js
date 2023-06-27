"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const zod_1 = require("zod");
const CreateUserValidate_1 = require("./CreateUserValidate");
const AppErrpr_1 = require("../../utils/AppErrpr");
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(request, response) {
        const { name, email, password } = request.body;
        try {
            const data = CreateUserValidate_1.createUserValidate.parse({
                name,
                email,
                password
            });
            await this.createUserUseCase.execute(data);
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
            return response.status(500).json({
                message: 'Erro inesperado ao criar usuário.'
            });
        }
    }
}
exports.CreateUserController = CreateUserController;
