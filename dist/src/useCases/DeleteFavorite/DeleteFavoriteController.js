"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFavoriteController = void 0;
class DeleteFavoriteController {
    constructor(deleteFavoriteUseCase) {
        this.deleteFavoriteUseCase = deleteFavoriteUseCase;
    }
    async handle(request, response) {
        const { userId, dishId } = request.query;
        try {
            await this.deleteFavoriteUseCase.execute(String(userId), String(dishId));
            return response.status(200).send();
        }
        catch (error) {
            return response.status(500).json({
                message: 'Erro inesperado ao remover favorito.'
            });
        }
    }
}
exports.DeleteFavoriteController = DeleteFavoriteController;
