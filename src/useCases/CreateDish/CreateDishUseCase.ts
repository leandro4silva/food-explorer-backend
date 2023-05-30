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

        await this.dishRepository.findDishByName(name);

        // ingredients.map(async (item) => {
        //     const ingredient = await this.dishRepository.findIngredientsByName(item.name);

        //     if(ingredient){
        //         throw new AppError(`O ingrediente ${ingredient.name} já está cadastrado.`, 'ingredients');
        //     }
        // })

        // const dish = new Dish(data);

        // this.dishRepository.save(dish);
    }
}