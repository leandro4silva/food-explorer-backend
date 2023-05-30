import { MysqlDishRepository } from "../../repositories/implementations/MysqlDishRepository"
import { CreateDishUseCase } from "./CreateDishUseCase";
import { CreateDishController } from "./CreateDishController";

const mysqlDishRepository = new MysqlDishRepository();
const createDishUseCase = new CreateDishUseCase(mysqlDishRepository);
const createDishController = new CreateDishController(createDishUseCase);


export {
    createDishController,
    createDishUseCase
}