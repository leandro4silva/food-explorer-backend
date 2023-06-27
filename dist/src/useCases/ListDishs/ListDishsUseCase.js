"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDishsUseCase = void 0;
class ListDishsUseCase {
    constructor(dishRepository, categoryRepository) {
        this.dishRepository = dishRepository;
        this.categoryRepository = categoryRepository;
    }
    async execute(dishValue) {
        if (dishValue) {
            const categoryWithDishs = await this.dishRepository.searchDish(dishValue);
            return categoryWithDishs;
        }
        else {
            const categoryWithDishs = await this.dishRepository.findDishsByCategory();
            return categoryWithDishs;
        }
    }
}
exports.ListDishsUseCase = ListDishsUseCase;
