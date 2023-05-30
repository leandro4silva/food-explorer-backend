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

    async findIngredientsByName(name: string): Promise<IngredientProps | null> {
        const ingredient = await this.prisma.ingredient.findFirst({
            where: {
                name
            }
        });

        return ingredient;
    }

    async findDishByName(name: string): Promise<Dish | null> {
        let data: Dish;

        const dish = await this.prisma.dish.findFirst({
            where: {
                name
            },
            include:{
                DishIngredients: true
            }
        });

        if(dish){
            dish.DishIngredients.map(async (item) => {
                const ingredient = await this.prisma.ingredient.findFirstOrThrow({
                    where :{
                        id: item.ingredientId
                    }
                });
            })
        }

        return null;
    }

 
}