import { PrismaClient } from "@prisma/client"
import { Dish } from "../../entities/Dish"
import { IDishRepository } from "../IDishRepository"
import { IngredientProps } from "../../useCases/CreateDish/CreateDishDTO";

export class MysqlDishRepository implements IDishRepository {
    private prisma = new PrismaClient();

    async save(data: Dish): Promise<void> {
        const { image, category, description, ingredients, name, price } = data;

        const dish = await this.prisma.dish.create({
            data: {
                image,
                category,
                description,
                name,
                price
            }
        });

        ingredients.map(async (item) => {
            const ingredient = await this.prisma.ingredient.create({
                data: {
                    name: item.name
                }
            })

            await this.prisma.dishIngredients.create({
                data: {
                    dishId: dish.id,
                    ingredientId: ingredient.id
                }
            })

        });

    }

    async edit(id: String): Promise<void> {

    }

    async findIngredientByName(name: string): Promise<IngredientProps | null> {
        const ingredient = await this.prisma.ingredient.findFirst({
            where: {
                name
            }
        });

        return ingredient;
    }

    async findDishByName(name: string): Promise<Dish | null> {
        let ingredients = [];

        const dishSelect = await this.prisma.dish.findFirst({
            select:{
                id: true,
                image: true,
                category: true,
                description: true,
                name: true,
                price: true,
                DishIngredients:{
                    select:{
                        ingredient: true,
                    }
                },
            },
            where: {
                name
            },
        });
        
        if(dishSelect){
            ingredients = dishSelect.DishIngredients.map((item) => {
                return item.ingredient
            });

            const dish = new Dish({
                image: dishSelect.image,
                name: dishSelect.name,
                category: dishSelect.category,
                description: dishSelect.description,
                price: dishSelect.price,
                ingredients
            });

            return dish;
        }

        return null;
    }


}