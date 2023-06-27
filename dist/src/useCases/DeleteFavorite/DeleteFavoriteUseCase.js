"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFavoriteUseCase = void 0;
class DeleteFavoriteUseCase {
    constructor(favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }
    async execute(userId, dishId) {
        await this.favoriteRepository.remove(userId, dishId);
    }
}
exports.DeleteFavoriteUseCase = DeleteFavoriteUseCase;
