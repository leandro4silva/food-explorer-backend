"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategorysController = void 0;
class ListCategorysController {
    constructor(listCategorysUseCase) {
        this.listCategorysUseCase = listCategorysUseCase;
    }
    async handle(request, response) {
        try {
            const allCategory = await this.listCategorysUseCase.execute();
            return response.status(200).json(allCategory);
        }
        catch (error) {
            return response.status(500).json({
                message: 'Erro inesperado ao listar as categorias.'
            });
        }
    }
}
exports.ListCategorysController = ListCategorysController;
