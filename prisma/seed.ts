import { PrismaClient } from "@prisma/client";
import {hash} from 'bcrypt'
const prisma = new PrismaClient();

async function main(){

    const saltRounds = 8;
    const hashedPassword = await hash('131313', saltRounds);

    const admin = await prisma.admin.create({
        data:{
            name: 'admin',
            email: 'admin@foodexplorer.com',
            password: hashedPassword,
        }
    })

    const categorys = await prisma.category.createMany({
        data: [
            {name: 'Refeições'},
            {name: 'Sobremesas'},
            {name: 'Bebidas'}
        ],
        skipDuplicates: true
    })

    return {
        admin,
        categorys
    }
}

main().then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})