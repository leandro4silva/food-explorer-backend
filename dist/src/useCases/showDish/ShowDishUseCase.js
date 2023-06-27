"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowDishUseCase = void 0;
class ShowDishUseCase {
    constructor(dishRepository) {
        this.dishRepository = dishRepository;
    }
    async execute(dishId) {
        const dish = await this.dishRepository.findDishById(dishId);
        return dish;
    }
}
exports.ShowDishUseCase = ShowDishUseCase;
