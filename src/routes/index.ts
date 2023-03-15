import { Router } from "express";
import { userRouter } from "./UsersRoutes";
import { sessionRouter } from "./SessionRoutes";

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);

export {
    routes
}