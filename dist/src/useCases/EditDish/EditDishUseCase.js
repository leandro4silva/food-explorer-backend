"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditDishUseCase = void 0;
const Dish_1 = require("../../entities/Dish");
const AppErrpr_1 = require("../../utils/AppErrpr");
class EditDishUseCase {
    constructor(dishRepository) {
        this.dishRepository = dishRepository;
    }
    async execute(data) {
        const { ingredients } = data;
        const ingredientAlreadyExist = ingredients.filter((ingredient, index, self) => {
            return index != self.findIndex((item) => {
                return item.name == ingredient.name;
            }) ? ingredient.name : null;
        });
        if (ingredientAlreadyExist.length > 0) {
            throw new AppErrpr_1.AppError(`Existem dois ingredientes com o nome ${ingredientAlreadyExist[0].name}.`, 'ingredients');
        }
        const dish = new Dish_1.Dish(data);
        await this.dishRepository.update(dish);
    }
}
exports.EditDishUseCase = EditDishUseCase;
