import { IFavoritesDTO } from "../useCases/ListFavorites/LIstFavoritesDTO"

export interface IFavoritesRepository{
    save(userId: string, dishId: string): Promise<void>
    listAllFavorites(userId: string): Promise<IFavoritesDTO[]>
    showFavorite(dishId: string, userId: string): Promise<IFavoritesDTO | null>
    remove(userId: string, dishId: string): Promise<void>
}