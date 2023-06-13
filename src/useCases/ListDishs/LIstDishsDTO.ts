
export interface IListDishsDTO {
    category: string,
    id: string,
    dishs: DishProps[]
}

export interface DishProps {
    id: string;
    image: string;
    name: string;
    category: string;
    price: string;
    description: string;
}