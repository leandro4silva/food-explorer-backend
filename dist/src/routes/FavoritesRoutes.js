"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoritesRouter = void 0;
const express_1 = require("express");
const CreateFavorites_1 = require("../useCases/CreateFavorites");
const ListFavorites_1 = require("../useCases/ListFavorites");
const DeleteFavorite_1 = require("../useCases/DeleteFavorite");
const ShowFavorite_1 = require("../useCases/ShowFavorite");
const favoritesRouter = (0, express_1.Router)();
exports.favoritesRouter = favoritesRouter;
favoritesRouter.post("/", (request, response) => {
    return CreateFavorites_1.createFavoritesController.handle(request, response);
});
favoritesRouter.get("/", (request, response) => {
    return ListFavorites_1.listFavoritesController.handle(request, response);
});
favoritesRouter.get("/:dishId/:userId", (request, response) => {
    return ShowFavorite_1.showFavoriteController.handle(request, response);
});
favoritesRouter.delete("/", (request, response) => {
    return DeleteFavorite_1.deleteFavoriteController.handle(request, response);
});
