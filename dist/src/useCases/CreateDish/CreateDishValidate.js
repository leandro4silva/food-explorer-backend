"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDishValidate = void 0;
const zod_1 = require("zod");
exports.createDishValidate = zod_1.z.object({
    image: zod_1.z.string(),
    name: zod_1.z.string({
        required_error: "O campo Nome deve ser preenchido"
    }).nonempty("O campo Imagem deve ser preenchido"),
    category: zod_1.z.string({
        required_error: "O campo Categoria deve ser preenchido"
    }).nonempty("O campo Categoria deve ser preenchido"),
    price: zod_1.z.string({
        required_error: "O campo Preço deve ser preenchido"
    }).nonempty("O campo Preço deve ser preenchido"),
    description: zod_1.z.string({
        required_error: "O campo Descrição deve ser preenchido"
    }).nonempty("O campo Descrição deve ser preenchido"),
    ingredients: zod_1.z.object({
        id: zod_1.z.string({
            required_error: "O campo ID do ingrediente é necessario"
        }),
        name: zod_1.z.string({
            required_error: "O campo Nome do ingrediente é necessario"
        }).nonempty("O campo Nome do ingrediente é necessario"),
    }).array().nonempty("O campo Ingredientes deve ser preenchido")
});
