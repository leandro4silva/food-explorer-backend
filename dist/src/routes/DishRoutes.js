"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dishRouter = void 0;
const express_1 = require("express");
const CreateDish_1 = require("../useCases/CreateDish");
const UploadImageDish_1 = require("../useCases/UploadImageDish");
const ListDishs_1 = require("../useCases/ListDishs");
const showDish_1 = require("../useCases/showDish");
const EditDish_1 = require("../useCases/EditDish");
const multer_1 = __importDefault(require("multer"));
const upload_1 = __importDefault(require("../configs/upload"));
const dishRouter = (0, express_1.Router)();
exports.dishRouter = dishRouter;
const upload = (0, multer_1.default)(upload_1.default.MULTER);
dishRouter.post('/', (request, response) => {
    return CreateDish_1.createDishController.handle(request, response);
});
dishRouter.patch('/image/:name', upload.single('image'), (request, response) => {
    return UploadImageDish_1.uploadImageDishController.handle(request, response);
});
dishRouter.get('/', (request, response) => {
    return ListDishs_1.listDishsController.handle(request, response);
});
dishRouter.get('/:id', (request, response) => {
    return showDish_1.showDishController.handle(request, response);
});
dishRouter.put('/', (request, response) => {
    return EditDish_1.editDishController.handle(request, response);
});
