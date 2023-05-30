import { Dish } from "../entities/Dish";
import { IngredientProps } from "../useCases/CreateDish/CreateDishDTO";

export interface IDishRepository{
    save(data: Dish): Promise<void>
    edit(id:string): Promise<void>
    findIngredientsByName(name:string): Promise<IngredientProps | null>
    findDishByName(name:string): Promise<Dish | null>
}