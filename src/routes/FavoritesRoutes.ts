import { Router, request, response } from "express";
import { createFavoritesController } from "../useCases/CreateFavorites";
import { listFavoritesController } from "../useCases/ListFavorites";
import { deleteFavoriteController } from "../useCases/DeleteFavorite";
import { showFavoriteController } from "../useCases/ShowFavorite";

const favoritesRouter = Router();

favoritesRouter.post("/", (request, response) => {
    return createFavoritesController.handle(request, response);
})

favoritesRouter.get("/", (request, response) => {
    return listFavoritesController.handle(request, response);
})

favoritesRouter.get("/:dishId/:userId", (request, response) => {
    return showFavoriteController.handle(request, response);
})

favoritesRouter.delete("/", (request, response) => {
    return deleteFavoriteController.handle(request, response);
})

export {
    favoritesRouter
}