"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidate = void 0;
const zod_1 = require("zod");
exports.createUserValidate = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "O campo nome deve ser preenchido",
    })
        .nonempty("O nome deve ser preenchido")
        .trim(),
    email: zod_1.z.string({
        required_error: "O campo email deve ser preenchido"
    }).nonempty("O email deve ser preenchido").email("Insira um email valido").trim(),
    password: zod_1.z.string({
        required_error: "A senha deve ser preenchida"
    }).nonempty("A senha deve ser preenchida").trim()
});
