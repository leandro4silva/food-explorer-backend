"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionValidate = void 0;
const zod_1 = require("zod");
exports.createSessionValidate = zod_1.z.object({
    email: zod_1.z.string({
        required_error: "O campo email deve ser preenchido"
    }).nonempty("O email deve ser preenchido").email("Insira um email valido"),
    password: zod_1.z.string({
        required_error: "O campo senha deve ser preenchido"
    }).nonempty("A senha deve ser preenchida"),
    isAdmin: zod_1.z.boolean({
        required_error: "O campo tipo de login deve ser informado"
    })
});
