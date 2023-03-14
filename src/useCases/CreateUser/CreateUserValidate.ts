import { z } from "zod";

export const createUserValidate = z.object({
    name: z.string({
        required_error: "O campo nome deve ser preenchido",
    }).nonempty("O nome deve ser preenchido"),
    email: z.string({
        required_error: "O campo email deve ser preenchido"
    }).nonempty("O email deve ser preenchido").email("Insira um email valido"),
    password: z.string({
        required_error: "A senha deve ser preenchida"
    }).nonempty("A senha deve ser preenchida")
});