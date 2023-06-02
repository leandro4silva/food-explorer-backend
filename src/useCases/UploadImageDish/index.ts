import { MysqlDishRepository } from "../../repositories/implementations/MysqlDishRepository";
import { UploadImageDishUseCase } from "./UploadImageDishUseCase";
import { UploadImageDishController } from "./UploadImageDishController";

const mysqlDishRepository = new MysqlDishRepository();
const uploadImageDishUseCase = new UploadImageDishUseCase(mysqlDishRepository);
const uploadImageDishController = new UploadImageDishController(uploadImageDishUseCase);

export {
    uploadImageDishUseCase,
    uploadImageDishController
}