import { MysqlDishRepository } from "../../repositories/implementations/MysqlDishRepository";
import { ShowDishController } from "./ShowDishController";
import { ShowDishUseCase } from "./ShowDishUseCase";

const mysqlDishRepository = new MysqlDishRepository();
const showDishUseCase = new ShowDishUseCase(mysqlDishRepository);
const showDishController = new ShowDishController(showDishUseCase);

export{
    showDishUseCase,
    showDishController
}