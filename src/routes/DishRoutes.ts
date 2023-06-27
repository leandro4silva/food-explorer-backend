import { Router, response } from 'express';
import { createDishController } from '../useCases/CreateDish';
import { uploadImageDishController } from '../useCases/UploadImageDish';
import { listDishsController } from '../useCases/ListDishs';
import { showDishController } from '../useCases/showDish';
import { editDishController } from '../useCases/EditDish';
import multer from 'multer';
import uploadConfig from '../configs/upload';

const dishRouter = Router();

const upload = multer(uploadConfig.MULTER);

dishRouter.post('/', (request, response) => {
    return createDishController.handle(request, response);
});

dishRouter.patch('/image/:name', upload.single('image'), (request, response) =>{
    return uploadImageDishController.handle(request, response);
})

dishRouter.get('/', (request, response) => {
    return listDishsController.handle(request, response);
})

dishRouter.get('/:id', (request, response) => {
    return showDishController.handle(request, response);
})

dishRouter.put('/', (request, response) => {
    return editDishController.handle(request, response)
})

export {
    dishRouter
}