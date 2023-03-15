import { Router } from "express"
import { createSessionController } from "../useCases/CreateSession/index";

const sessionRouter = Router();

sessionRouter.post('/', (request, response) => {
    createSessionController.handle(request, response);
})

export {
    sessionRouter
}