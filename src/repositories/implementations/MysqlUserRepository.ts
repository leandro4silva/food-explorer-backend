import { User } from "../../entities/User";
import { IUserRepository } from "../IUsersRepository";
import { PrismaClient } from "@prisma/client";
import { hash } from 'bcrypt';

export class MysqlUserRepository implements IUserRepository{
    private prisma = new PrismaClient();

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });
        return user;
    }

    async save(user: User): Promise<void> {
        const saltRounds = 8;
        const hashedPassword = await hash(user.password, saltRounds);

        await this.prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hashedPassword
            }
        })
    }

    async listAllUsers(): Promise<User[] | null> {
        const allUsers = await this.prisma.user.findMany();
        return allUsers;
    }
}