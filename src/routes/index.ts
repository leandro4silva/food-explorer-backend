import express, { Router } from "express";
import { userRouter } from "./UsersRoutes";
import { sessionRouter } from "./SessionRoutes";
import { dishRouter } from "./DishRoutes";
import { categoryRoutes } from "./CategorysRoutes";
import { favoritesRouter } from "./FavoritesRoutes";
import uploadConfig from '../configs/upload';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);
routes.use('/dishs', dishRouter);
routes.use('/categorys', categoryRoutes);
routes.use('/favorites', favoritesRouter);

routes.use('/files', express.static(uploadConfig.UPLOAD_FOLDER))

export {
    routes
}