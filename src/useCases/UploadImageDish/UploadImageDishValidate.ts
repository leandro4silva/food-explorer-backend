import { z } from "zod";

export const uploadImageDishValidate = z.object({
    name: z.string({
        required_error: "O campo nome deve ser informado",
    })
    .nonempty("O nome deve ser informado")
    .trim(),
    
    image: z.string({
        required_error: "O campo imagem deve ser informado"
    }).nonempty("O imagem deve ser informado")
});