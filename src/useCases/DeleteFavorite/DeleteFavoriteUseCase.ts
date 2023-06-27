import { IFavoritesRepository } from "../../repositories/IFavoritesRepository";

export class DeleteFavoriteUseCase{
    private favoriteRepository: IFavoritesRepository;

    constructor(favoriteRepository: IFavoritesRepository){
        this.favoriteRepository = favoriteRepository;
    }

    async execute(userId: string, dishId: string){
        await this.favoriteRepository.remove(userId, dishId);
    }
}