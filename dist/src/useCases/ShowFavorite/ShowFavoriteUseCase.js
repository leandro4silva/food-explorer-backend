"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowFavoriteUseCase = void 0;
class ShowFavoriteUseCase {
    constructor(favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }
    async execute(dishId, userId) {
        const dish = await this.favoriteRepository.showFavorite(dishId, userId);
        return dish;
    }
}
exports.ShowFavoriteUseCase = ShowFavoriteUseCase;
