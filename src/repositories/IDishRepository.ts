import { Category } from "../entities/Category";
import { Dish } from "../entities/Dish";
import { IngredientProps } from "../useCases/CreateDish/CreateDishDTO";
import { DishProps, IListDishsDTO } from "../useCases/ListDishs/LIstDishsDTO";


export interface IDishRepository{
    save(data: Dish): Promise<void>
    updateImage(image: string, dishId: string): Promise<void>
    update(dish:Dish): Promise<void>
    updateImage(id: string, image: string): Promise<void>
    findDishById(id: string): Promise<Dish | null> 
    findIngredientByName(name:string): Promise<IngredientProps | null>
    findDishByName(name:string): Promise<DishProps | null>
    findDishsByCategory(): Promise<IListDishsDTO[]>
}