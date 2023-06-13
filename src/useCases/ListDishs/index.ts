import { MysqlDishRepository } from "../../repositories/implementations/MysqlDishRepository";
import { MysqlCategoryRepository } from "../../repositories/implementations/MysqlCategoryRepository";
import { ListDishsController } from "./ListDishsController";
import { ListDishsUseCase } from "./ListDishsUseCase";

const mysqlDishRepository = new MysqlDishRepository();
const mysqlCategoryRepository = new MysqlCategoryRepository();
const listDishsUseCase = new ListDishsUseCase(mysqlDishRepository, mysqlCategoryRepository);
const listDishsCOntroller = new ListDishsController(listDishsUseCase);

export {
    listDishsCOntroller,
    listDishsUseCase
}