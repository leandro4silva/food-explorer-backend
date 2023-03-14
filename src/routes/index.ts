import { Router } from "express";
import { userRouter } from "./UsersRoutes";

const routes = Router();

routes.use('/users', userRouter);

export {
    routes
}