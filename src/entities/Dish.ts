import { IngredientProps } from "../useCases/CreateDish/CreateDishDTO";

export class Dish{
    public readonly id:string;
    public image:string;
    public name:string;
    public category:string;
    public ingredients: Array<IngredientProps>
    public price:string;
    public description:string;

    constructor(props: Omit<Dish, 'id'>, id?: string){
        Object.assign(this, props);
    }
}
