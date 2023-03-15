import { z } from 'zod';

export const createSessionValidate = z.object({
    email: z.string({
        required_error: "O campo email deve ser preenchido"
    }).nonempty("O email deve ser preenchido").email("Insira um email valido"),
    password: z.string({
        required_error: "O campo senha deve ser preenchido"
    }).nonempty("A senha deve ser preenchida")
})