"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSessionController = void 0;
const zod_1 = require("zod");
const CreateSessionValidate_1 = require("../CreateSession/CreateSessionValidate");
class CreateSessionController {
    constructor(createSessionUseCase) {
        this.createSessionUseCase = createSessionUseCase;
    }
    async handle(request, response) {
        const { email, password, isAdmin } = request.body;
        try {
            CreateSessionValidate_1.createSessionValidate.parse({
                email,
                password,
                isAdmin
            });
            const userWithToken = await this.createSessionUseCase.execute({
                email,
                password,
                isAdmin
            });
            return response.status(201).json(userWithToken);
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                return response.status(400).json(error.issues.map((issue) => ({ message: issue.message })));
            }
            if (error instanceof Error) {
                return response.status(401).json({
                    message: error.message
                });
            }
            return response.status(500).json({
                message: 'Erro inesperado ao criar a sessão.'
            });
        }
    }
}
exports.CreateSessionController = CreateSessionController;
