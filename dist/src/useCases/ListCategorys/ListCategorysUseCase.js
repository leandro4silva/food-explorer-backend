"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategorysUseCase = void 0;
class ListCategorysUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async execute() {
        return await this.categoryRepository.listAllCategory();
    }
}
exports.ListCategorysUseCase = ListCategorysUseCase;
