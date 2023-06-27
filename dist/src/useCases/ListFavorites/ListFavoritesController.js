"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFavoritesController = void 0;
class ListFavoritesController {
    constructor(listFavoritesUseCase) {
        this.listFavoritesUseCase = listFavoritesUseCase;
    }
    async handle(request, response) {
        const { userId } = request.query;
        try {
            const listFavoritesDishs = await this.listFavoritesUseCase.execute(String(userId));
            return response.status(200).json(listFavoritesDishs);
        }
        catch (error) {
            return response.status(500).json({
                message: 'Erro inesperado ao listar pratos favoritados.'
            });
        }
    }
}
exports.ListFavoritesController = ListFavoritesController;
