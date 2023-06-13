import { MysqlDishRepository } from "../../repositories/implementations/MysqlDishRepository";
import { UploadImageDishController } from "./UploadImageDishController";
import { UploadImageDishUseCase } from "./UploadImageDishUseCase";
import { DiskStorage } from "../../providers/implementations/DiskStorageProvider";

const mysqlDishRepository = new MysqlDishRepository();
const diskStorage = new DiskStorage();
const uploadImageDishUseCase = new UploadImageDishUseCase(mysqlDishRepository, diskStorage);
const uploadImageDishController = new UploadImageDishController(uploadImageDishUseCase);

export{
    uploadImageDishUseCase,
    uploadImageDishController
}