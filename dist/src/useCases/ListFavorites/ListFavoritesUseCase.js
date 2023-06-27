"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFavoritesUseCase = void 0;
class ListFavoritesUseCase {
    constructor(favoritesRepository) {
        this.favoritesRepository = favoritesRepository;
    }
    async execute(userId) {
        return await this.favoritesRepository.listAllFavorites(userId);
    }
}
exports.ListFavoritesUseCase = ListFavoritesUseCase;
