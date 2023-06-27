"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImageDishUseCase = void 0;
const AppErrpr_1 = require("../../utils/AppErrpr");
class UploadImageDishUseCase {
    constructor(dishRepository, diskStorageProvider) {
        this.dishRepository = dishRepository;
        this.diskStorageProvider = diskStorageProvider;
    }
    async execute({ name, image }) {
        const dish = await this.dishRepository.findDishByName(name);
        if (!dish) {
            throw new AppErrpr_1.AppError("Esse prato ainda não está cadastrado", '', 404);
        }
        if (dish.image) {
            await this.diskStorageProvider.deleteFile(dish.image);
        }
        const filename = await this.diskStorageProvider.saveFile(image);
        await this.dishRepository.updateImage(filename, dish.id);
    }
}
exports.UploadImageDishUseCase = UploadImageDishUseCase;
