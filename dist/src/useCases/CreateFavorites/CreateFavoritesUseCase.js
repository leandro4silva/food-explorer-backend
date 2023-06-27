"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFavoritesUseCase = void 0;
class CreateFavoritesUseCase {
    constructor(favoritesRepository) {
        this.favoritesRepository = favoritesRepository;
    }
    async execute(userId, dishId) {
        await this.favoritesRepository.save(userId, dishId);
    }
}
exports.CreateFavoritesUseCase = CreateFavoritesUseCase;
