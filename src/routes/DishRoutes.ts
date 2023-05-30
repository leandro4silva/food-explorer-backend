import { Router } from 'express';
import { createDishController } from '../useCases/CreateDish';

const dishRouter = Router();

dishRouter.post('/', (request, response) => {
    return createDishController.handle(request, response);
})

export {
    dishRouter
}