import { Router } from 'express';
import { createDishController } from '../useCases/CreateDish';
import { uploadImageDishController } from '../useCases/UploadImageDish';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import multer from 'multer';
import uploadConfig from '../configs/upload';

const dishRouter = Router();

const upload = multer(uploadConfig.MULTER);

dishRouter.post('/', (request, response) => {
    return createDishController.handle(request, response);
});

dishRouter.patch('/image', ensureAuthenticated, upload.single('image') ,uploadImageDishController.handle)

export {
    dishRouter
}