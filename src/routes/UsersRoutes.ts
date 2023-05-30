import { Router } from "express";
import { createUserController } from "../useCases/CreateUser/index";
import { listUsersController } from "../useCases/ListUsers";

const userRouter = Router();

userRouter.post('/', (request, response) => {
    return createUserController.handle(request, response);
});

userRouter.get('/', (request, response) =>{
    return listUsersController.handle(request, response);
});

export {
    userRouter
}