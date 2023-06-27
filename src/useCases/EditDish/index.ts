import { MysqlDishRepository } from "../../repositories/implementations/MysqlDishRepository";
import { EditDishUseCase } from "./EditDishUseCase";
import { EditDishController } from "./EditDishController";

const mysqlDishRepository = new MysqlDishRepository();
const editDishUseCase = new EditDishUseCase(mysqlDishRepository);
const editDishController = new EditDishController(editDishUseCase);

export{
    editDishController,
    editDishUseCase
}