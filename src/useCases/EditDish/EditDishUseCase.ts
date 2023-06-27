import { Dish } from "../../entities/Dish";
import { IDishRepository } from "../../repositories/IDishRepository";
import { AppError } from "../../utils/AppErrpr";

export class EditDishUseCase{
    private dishRepository: IDishRepository;

    constructor(dishRepository: IDishRepository){
        this.dishRepository = dishRepository;
    }

    async execute(data: Dish){
        const { ingredients } = data;

        const ingredientAlreadyExist = ingredients.filter((ingredient, index, self) => {
            return index != self.findIndex((item) => {
                return item.name == ingredient.name
            }) ? ingredient.name : null
        })
        
        if(ingredientAlreadyExist.length > 0){
            throw new AppError(`Existem dois ingredientes com o nome ${ingredientAlreadyExist[0].name}.`, 'ingredients');
        }

        const dish = new Dish(data);

        await this.dishRepository.update(dish);
    }
}