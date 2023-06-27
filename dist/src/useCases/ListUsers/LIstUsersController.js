"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersController = void 0;
class ListUsersController {
    constructor(listUsersUseCase) {
        this.listUserUseCase = listUsersUseCase;
    }
    async handle(request, response) {
        try {
            const allUsers = await this.listUserUseCase.execute();
            return response.status(200).json(allUsers);
        }
        catch (error) {
            return response.status(500).json({
                message: 'Erro inesperado ao listar pratos.'
            });
        }
    }
}
exports.ListUsersController = ListUsersController;
