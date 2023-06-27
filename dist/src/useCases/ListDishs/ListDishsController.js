"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDishsController = void 0;
class ListDishsController {
    constructor(listDishsUseCase) {
        this.listDishsUseCase = listDishsUseCase;
    }
    async handle(request, response) {
        const { dish } = request.query;
        try {
            const listDishs = await this.listDishsUseCase.execute(String(dish));
            return response.status(200).json(listDishs);
        }
        catch (error) {
            return response.status(500).json({
                message: 'Erro inesperado ao listar pratos.'
            });
        }
    }
}
exports.ListDishsController = ListDishsController;
