import { IFavoritesRepository } from "../../repositories/IFavoritesRepository";

export class ShowFavoriteUseCase{
    private favoriteRepository: IFavoritesRepository
    
    constructor(favoriteRepository: IFavoritesRepository){
        this.favoriteRepository = favoriteRepository;
    }

    async execute(dishId: string, userId: string){
        const dish = await this.favoriteRepository.showFavorite(dishId, userId);

        return dish;
    }
}