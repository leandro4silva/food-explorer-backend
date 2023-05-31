import { ICategoryRepository } from "../../repositories/ICategoryRepository";

export class ListCategorysUseCase{
    private categoryRepository: ICategoryRepository;

    constructor(categoryRepository: ICategoryRepository){
        this.categoryRepository = categoryRepository;
    }

    async execute(){
        return await this.categoryRepository.listAllCategory();
    }
}