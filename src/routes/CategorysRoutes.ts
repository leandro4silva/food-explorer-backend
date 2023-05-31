import { Router } from "express";
import { listCategorysController } from "../useCases/ListCategorys";

const categoryRoutes = Router();

categoryRoutes.get('/', (request, response) => {
    return  listCategorysController.handle(request, response);
});

export {
    categoryRoutes
}