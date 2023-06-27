import { MysqlDishRepository } from "../../repositories/implementations/MysqlDishRepository";
import { MysqlCategoryRepository } from "../../repositories/implementations/MysqlCategoryRepository";
import { ListDishsController } from "./ListDishsController";
import { ListDishsUseCase } from "./ListDishsUseCase";

const mysqlDishRepository = new MysqlDishRepository();
const mysqlCategoryRepository = new MysqlCategoryRepository();
const listDishsUseCase = new ListDishsUseCase(mysqlDishRepository, mysqlCategoryRepository);
const listDishsController = new ListDishsController(listDishsUseCase);

export {
    listDishsController,
    listDishsUseCase
}