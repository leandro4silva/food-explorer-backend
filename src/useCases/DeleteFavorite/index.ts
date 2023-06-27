import { MysqlFavoritesRepository } from "../../repositories/implementations/MysqlFavoritesRepository";
import { DeleteFavoriteUseCase } from "./DeleteFavoriteUseCase";
import { DeleteFavoriteController } from "./DeleteFavoriteController";

const mysqlFavoritesRepository = new MysqlFavoritesRepository();
const deleteFavoriteUseCase = new DeleteFavoriteUseCase(mysqlFavoritesRepository);
const deleteFavoriteController = new DeleteFavoriteController(deleteFavoriteUseCase);

export{
    deleteFavoriteUseCase,
    deleteFavoriteController
}