import { Router, Request, Response } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();

const userController = new UserController();

userRouter.get('/', userController.index);
userRouter.post('/', userController.create);

export {
    userRouter
}