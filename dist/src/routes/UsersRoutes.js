"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const index_1 = require("../useCases/CreateUser/index");
const ListUsers_1 = require("../useCases/ListUsers");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post('/', (request, response) => {
    return index_1.createUserController.handle(request, response);
});
userRouter.get('/', (request, response) => {
    return ListUsers_1.listUsersController.handle(request, response);
});
