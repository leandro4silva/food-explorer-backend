export interface ICreateDishRequestDTO{
    image: string;
    name: string;
    category: string;
    price: string;
    description: string;
    ingredients: Array<IngredientProps>
}

export interface IngredientProps{
    id: string,
    name: string
}
