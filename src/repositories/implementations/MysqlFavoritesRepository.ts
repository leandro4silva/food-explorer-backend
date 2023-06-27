import { PrismaClient } from "@prisma/client";
import { IFavoritesRepository } from "../IFavoritesRepository";
import { IFavoritesDTO } from "../../useCases/ListFavorites/LIstFavoritesDTO";

export class MysqlFavoritesRepository implements IFavoritesRepository{
    private prisma = new PrismaClient();
    
    async listAllFavorites(userId: string): Promise<IFavoritesDTO[]> {
        const dishs = await this.prisma.favorites.findMany({
            select:{
                dish:{
                    select:{
                        id: true,
                        image: true,
                        name: true
                    }
                }
            },
            where: {
                userId
            },
            orderBy: {
                dishId: "asc"
            }
        });

        const favoritesDishs = dishs.map((item) => {
            return item.dish
        })

        return favoritesDishs
    }
    
    async save(userId: string, dishId: string): Promise<void> {
        await this.prisma.favorites.create({
            data:{
                dishId,
                userId
            }
        })
    }
    
    async remove(userId: string, dishId: string): Promise<void> {
        await this.prisma.favorites.delete({
            where:{
                userId_dishId:{
                    dishId,
                    userId
                }
            }
        })
    }
    
    async showFavorite(dishId: string, userId: string) : Promise<IFavoritesDTO | null>{
        const dishs = await this.prisma.favorites.findFirst({
            select:{
                dish:{
                    select:{
                        id: true,
                        image: true,
                        name: true
                    }
                }
            },
            where: {
                dishId,
                userId
            }
        });

        if(dishs){
            return dishs.dish
        }

        return null
    }
}