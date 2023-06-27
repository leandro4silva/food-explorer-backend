"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowDishController = void 0;
class ShowDishController {
    constructor(showDishUseCase) {
        this.showDishUseCase = showDishUseCase;
    }
    async handle(request, response) {
        const { id } = request.params;
        try {
            const dish = await this.showDishUseCase.execute(id);
            return response.status(200).json(dish);
        }
        catch (error) {
            return response.status(500).json({
                message: 'Erro inesperado ao lista prato.'
            });
        }
    }
}
exports.ShowDishController = ShowDishController;
