"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = require("express");
const ListCategorys_1 = require("../useCases/ListCategorys");
const categoryRoutes = (0, express_1.Router)();
exports.categoryRoutes = categoryRoutes;
categoryRoutes.get('/', (request, response) => {
    return ListCategorys_1.listCategorysController.handle(request, response);
});
