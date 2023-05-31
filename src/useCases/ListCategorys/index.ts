import { MysqlCategoryRepository } from "../../repositories/implementations/MysqlCategoryRepository";
import { ListCategorysUseCase } from "./ListCategorysUseCase";
import { ListCategorysController } from "./ListCategorysController";

const mysqlCategoryRepository = new MysqlCategoryRepository();
const listCategorysUseCase = new ListCategorysUseCase(mysqlCategoryRepository);
const listCategorysController = new ListCategorysController(listCategorysUseCase);

export {
    listCategorysController,
    listCategorysUseCase
}