import {z} from 'zod';

export const createDishValidate = z.object({
    image: z.string({
        required_error: "O campo Imagem deve ser preenchido"
    }).nonempty("O campo Imagem deve ser preenchido"),
    name: z.string({
        required_error: "O campo Nome deve ser preenchido"
    }).nonempty("O campo Imagem deve ser preenchido"),
    category: z.string({
        required_error: "O campo Categoria deve ser preenchido"
    }).nonempty("O campo Categoria deve ser preenchido"),
    price: z.string({
        required_error: "O campo Preço deve ser preenchido"
    }).nonempty("O campo Preço deve ser preenchido"),
    description: z.string({
        required_error: "O campo Descrição deve ser preenchido"
    }).nonempty("O campo Descrição deve ser preenchido"),
    ingredients: z.object({
        id: z.string({
            required_error: "O campo ID do ingrediente é necessario"
        }),
        name: z.string({
            required_error: "O campo Nome do ingrediente é necessario"
        }).nonempty("O campo Nome do ingrediente é necessario"),
    }).array().nonempty("O campo Ingredientes deve ser preenchido")
})