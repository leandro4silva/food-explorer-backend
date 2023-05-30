import { Router } from "express";
import { userRouter } from "./UsersRoutes";
import { sessionRouter } from "./SessionRoutes";
import { dishRouter } from "./DishRoutes";

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);
routes.use('/dishs', dishRouter);


export {
    routes
}