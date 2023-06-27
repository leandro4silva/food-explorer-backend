"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageDishValidate = void 0;
const zod_1 = require("zod");
exports.uploadImageDishValidate = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "O campo nome deve ser informado",
    })
        .nonempty("O nome deve ser informado")
        .trim(),
    image: zod_1.z.string({
        required_error: "O campo imagem deve ser informado"
    }).nonempty("O imagem deve ser informado")
});
