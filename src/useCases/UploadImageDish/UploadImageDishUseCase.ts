import { IDiskStorageProvider } from "../../providers/IDiskStorageProviers";
import { IDishRepository } from "../../repositories/IDishRepository";
import { AppError } from "../../utils/AppErrpr";
import { IUploadImageDishDTO } from "./UploadImageDishDTO";

export class UploadImageDishUseCase{
    private dishRepository: IDishRepository;
    private diskStorageProvider: IDiskStorageProvider;

    constructor(dishRepository: IDishRepository, diskStorageProvider: IDiskStorageProvider){
        this.dishRepository = dishRepository;
        this.diskStorageProvider = diskStorageProvider;
    }

    async execute({name, image}: IUploadImageDishDTO){
        const dish = await this.dishRepository.findDishByName(name);
        
        if(!dish){
            throw new AppError("Esse prato ainda não está cadastrado", '', 404);
        }
        
        if(dish.image){
            await this.diskStorageProvider.deleteFile(dish.image);
        }
        
        const filename = await this.diskStorageProvider.saveFile(image);

        await this.dishRepository.updateImage(filename, dish.id);
    }
}