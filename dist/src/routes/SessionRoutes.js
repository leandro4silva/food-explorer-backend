"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRouter = void 0;
const express_1 = require("express");
const index_1 = require("../useCases/CreateSession/index");
const sessionRouter = (0, express_1.Router)();
exports.sessionRouter = sessionRouter;
sessionRouter.post('/', (request, response) => {
    index_1.createSessionController.handle(request, response);
});
