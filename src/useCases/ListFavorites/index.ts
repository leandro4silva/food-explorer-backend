import { MysqlFavoritesRepository } from "../../repositories/implementations/MysqlFavoritesRepository";
import { ListFavoritesUseCase } from "./ListFavoritesUseCase";
import { ListFavoritesController } from "./ListFavoritesController";

const mysqlFavoritesRepository = new MysqlFavoritesRepository();
const listFavoritesUseCase = new ListFavoritesUseCase(mysqlFavoritesRepository);
const listFavoritesController = new ListFavoritesController(listFavoritesUseCase);

export {
    listFavoritesController,
    listFavoritesUseCase
}