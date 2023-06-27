"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const prisma = new client_1.PrismaClient();
async function main() {
    const saltRounds = 8;
    const hashedPassword = await (0, bcrypt_1.hash)('131313', saltRounds);
    const admin = await prisma.admin.create({
        data: {
            name: 'admin',
            email: 'admin@foodexplorer.com',
            password: hashedPassword,
        }
    });
    const categorys = await prisma.category.createMany({
        data: [
            { name: 'Refeições' },
            { name: 'Sobremesas' },
            { name: 'Bebidas' }
        ],
        skipDuplicates: true
    });
    return {
        admin,
        categorys
    };
}
main().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
