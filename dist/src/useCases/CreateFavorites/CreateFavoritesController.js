"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFavoritesController = void 0;
class CreateFavoritesController {
    constructor(createFavoritesUseCase) {
        this.createFavoritesUseCase = createFavoritesUseCase;
    }
    async handle(request, response) {
        const { userId, dishId } = request.body;
        try {
            await this.createFavoritesUseCase.execute(userId, dishId);
            return response.status(201).send();
        }
        catch (error) {
            return response.status(500).json({
                message: 'Erro inesperado ao favoritar prato.'
            });
        }
    }
}
exports.CreateFavoritesController = CreateFavoritesController;
