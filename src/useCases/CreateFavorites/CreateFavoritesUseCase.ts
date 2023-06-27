import { IFavoritesRepository } from "../../repositories/IFavoritesRepository";

export class CreateFavoritesUseCase{
    private favoritesRepository: IFavoritesRepository 
    
    constructor(favoritesRepository: IFavoritesRepository){
        this.favoritesRepository = favoritesRepository;
    }

    async execute(userId: string, dishId: string){
        await this.favoritesRepository.save(userId, dishId)
    }

}