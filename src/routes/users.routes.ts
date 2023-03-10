import { Router, Request, Response } from "express";
import { createUserController } from "../useCases/CreateUser/index";

const userRouter = Router();

userRouter.post('/', createUserController.handle);

export {
    userRouter
}