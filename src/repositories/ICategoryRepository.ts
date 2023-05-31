import { Category } from "../entities/Category";

export interface ICategoryRepository{
    listAllCategory(): Promise<Category[] | null>
}