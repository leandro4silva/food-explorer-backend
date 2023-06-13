import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { IDishRepository } from "../../repositories/IDishRepository";
import { IListDishsDTO } from "./LIstDishsDTO";

export class ListDishsUseCase{
    private dishRepository: IDishRepository;
    private categoryRepository: ICategoryRepository;
    
    constructor(dishRepository: IDishRepository, categoryRepository: ICategoryRepository){
        this.dishRepository = dishRepository;
        this.categoryRepository = categoryRepository;
    }
    
    async execute(){
        const categoryWithDishs = await this.dishRepository.findDishsByCategory()
        
        return categoryWithDishs
    }
}