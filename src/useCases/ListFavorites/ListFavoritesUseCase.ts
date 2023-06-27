import { IFavoritesRepository } from "../../repositories/IFavoritesRepository";

export class ListFavoritesUseCase{
    private favoritesRepository: IFavoritesRepository;

    constructor(favoritesRepository: IFavoritesRepository){
        this.favoritesRepository = favoritesRepository;
    }

    async execute(userId: string){
        return await this.favoritesRepository.listAllFavorites(userId);
    }
}