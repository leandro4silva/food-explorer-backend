import { IDishRepository } from "../../repositories/IDishRepository"

export class UploadImageDishUseCase{
    private dishRepository;

    constructor(dishRepository: IDishRepository){
        this.dishRepository = dishRepository
    }

    async execute(){

    }
}