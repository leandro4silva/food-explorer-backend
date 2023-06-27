import { MysqlFavoritesRepository } from "../../repositories/implementations/MysqlFavoritesRepository";
import { ShowFavoriteUseCase } from "./ShowFavoriteUseCase";
import { ShowFavoriteController } from "./ShowFavoriteController";

const mysqlFavoritesRepository = new MysqlFavoritesRepository();
const showFavoriteUseCase = new ShowFavoriteUseCase(mysqlFavoritesRepository);
const showFavoriteController = new ShowFavoriteController(showFavoriteUseCase);

export {
    showFavoriteUseCase,
    showFavoriteController
}