import { IDishRepository } from "../../repositories/IDishRepository";
import { ICreateDishRequestDTO } from "./CreateDishDTO";
import { Dish } from "../../entities/Dish";
import { AppError } from "../../utils/AppErrpr";

export class CreateDishUseCase{
    private dishRepository;

    constructor(dishRepository: IDishRepository) {
        this.dishRepository = dishRepository;
    }

    async execute(data: ICreateDishRequestDTO){
        const { ingredients, name } = data;

        const dishAlreadyExist = await this.dishRepository.findDishByName(name);

        if (dishAlreadyExist) {
            throw new AppError('Esse prato já está cadastrado.', 'dish');
        }

        const ingredientAlreadyExist = ingredients.filter((ingredient, index, self) => {
            return index != self.findIndex((item) => {
                return item.name == ingredient.name
            }) ? ingredient.name : null
        })
        
        if(ingredientAlreadyExist){
            throw new AppError(`Existem dois ingredientes com o nome ${ingredientAlreadyExist[0].name}.`, 'ingredients');
        }

        const dish = new Dish(data);
        this.dishRepository.save(dish);
    }
}