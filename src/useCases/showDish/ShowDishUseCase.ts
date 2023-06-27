import { IDishRepository } from "../../repositories/IDishRepository";

export class ShowDishUseCase{
    private dishRepository: IDishRepository;

    constructor(dishRepository: IDishRepository){
        this.dishRepository = dishRepository;
    }

    async execute(dishId: string){
        const dish = await this.dishRepository.findDishById(dishId);
        return dish;
    }
}