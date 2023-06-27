"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowFavoriteController = void 0;
class ShowFavoriteController {
    constructor(showFavoriteUseCase) {
        this.showFavoriteUseCase = showFavoriteUseCase;
    }
    async handle(request, response) {
        const { dishId, userId } = request.params;
        try {
            const dish = await this.showFavoriteUseCase.execute(dishId, userId);
            return response.status(200).json(dish);
        }
        catch (error) {
            return response.status(500).json({
                message: 'Erro inesperado ao lista prato.'
            });
        }
    }
}
exports.ShowFavoriteController = ShowFavoriteController;
