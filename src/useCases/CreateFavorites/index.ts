import { MysqlFavoritesRepository } from "../../repositories/implementations/MysqlFavoritesRepository";
import { CreateFavoritesUseCase } from "./CreateFavoritesUseCase";
import { CreateFavoritesController } from "./CreateFavoritesController";

const mysqlFavoritesRepository = new MysqlFavoritesRepository();
const createFavoritesUseCase = new CreateFavoritesUseCase(mysqlFavoritesRepository);
const createFavoritesController = new CreateFavoritesController(createFavoritesUseCase);

export {
    createFavoritesUseCase,
    createFavoritesController
}
