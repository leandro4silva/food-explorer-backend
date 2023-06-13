import { Router, response } from 'express';
import { createDishController } from '../useCases/CreateDish';
import { uploadImageDishController } from '../useCases/UploadImageDish';
import { listDishsCOntroller } from '../useCases/ListDishs';
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
    return listDishsCOntroller.handle(request, response);
})

export {
    dishRouter
}