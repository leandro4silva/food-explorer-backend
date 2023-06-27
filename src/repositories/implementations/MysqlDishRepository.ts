import { Category, PrismaClient } from "@prisma/client"
import { Dish } from "../../entities/Dish"
import { IDishRepository } from "../IDishRepository"
import { IngredientProps } from "../../useCases/CreateDish/CreateDishDTO";
import { DishProps, IListDishsDTO } from "../../useCases/ListDishs/LIstDishsDTO";

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

    async updateImage(image: string, dishId: string) {
        await this.prisma.dish.update({
            data: {
                image: image
            },
            where: {
                id: dishId
            }
        })
    }

    async update(dish: Dish): Promise<void> {
        await this.prisma.dish.update({
            data: {
                image: dish.image,
                name: dish.name,
                category: dish.category,
                description: dish.description,
                price: dish.price,
            },
            where: {
                id: dish.id
            }
        })

        const ingredients =  await this.prisma.dishIngredients.findMany({
            where: {
                dishId: dish.id
            }
        });

        ingredients.map(async (ingredient) => {
            await this.prisma.ingredient.delete({
                where: {
                    id: ingredient.ingredientId
                }
            })
        })

        dish.ingredients.map(async (ingredient) => {
            const ingredientCreate = await this.prisma.ingredient.create({
                data: {
                    name: ingredient.name
                }
            })

            await this.prisma.dishIngredients.create({
                data: {
                    dishId: dish.id,
                    ingredientId: ingredientCreate.id
                }
            })
        })
    }

    async findDishsByCategory(): Promise<IListDishsDTO[]> {
        let listDishs: Array<IListDishsDTO> = [];

        const dishsWithCategory = await this.prisma.category.findMany({
            select:{    
                Dish: {
                    select:{
                        id: true,
                        name: true,
                        image: true,
                        category: true,
                        price: true,
                        description: true,
                    }
                },
                name: true,
                id: true
            },
            orderBy: {
                id: "asc"
            }
 
        });

        
        dishsWithCategory.map(item => {
            listDishs.push({
                id: item.id,
                category: item.name,
                dishs: item.Dish
            })
        })
        
        return listDishs;
    }

    async searchDish(dishName: string): Promise<IListDishsDTO[]>  {
        let listDishs: Array<IListDishsDTO> = [];

        const dishsWithCategory = await this.prisma.category.findMany({
            select:{    
                Dish: {
                    select:{
                        id: true,
                        name: true,
                        image: true,
                        category: true,
                        price: true,
                        description: true,
                    },
                    where:{
                        name: {
                            contains: dishName
                        }
                    }
                },
                name: true,
                id: true
            },
            orderBy: {
                id: "asc"
            }
 
        });

        
        dishsWithCategory.map(item => {
            listDishs.push({
                id: item.id,
                category: item.name,
                dishs: item.Dish
            })
        })
        
        return listDishs;
    }

    async findDishById(id: string): Promise<Dish | null> {
        let ingredients = [];

        const dishSelect = await this.prisma.dish.findFirst({
            select: {
                id: true,
                image: true,
                category: true,
                description: true,
                name: true,
                price: true,
                DishIngredients: {
                    select: {
                        ingredient: true,
                    }
                },
            },
            where: {
                id
            }
        })

        
        if (dishSelect) {
            ingredients = dishSelect.DishIngredients.map((item) => {
                return item.ingredient
            });

            
            const dish = {
                id: dishSelect.id,
                image: dishSelect.image,
                name: dishSelect.name,
                category: dishSelect.category,
                description: dishSelect.description,
                price: dishSelect.price,
                ingredients: ingredients
            };
            
            return dish;
        }

        return null
    }

    async findIngredientByName(name: string): Promise<IngredientProps | null> {
        const ingredient = await this.prisma.ingredient.findFirst({
            where: {
                name
            }
        });

        return ingredient;
    }

    async findDishByName(name: string): Promise<DishProps | null> {
        const dishSelect = await this.prisma.dish.findFirst({
            select: {
                id: true,
                image: true,
                category: true,
                description: true,
                name: true,
                price: true,
            },
            where: {
                name: {
                    contains: name
                }
            },
        });

        return dishSelect;
    }


}