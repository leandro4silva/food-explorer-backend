"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlUserRepository = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
class MysqlUserRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async findByEmail(email) {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        });
        return user;
    }
    async save(user) {
        const saltRounds = 8;
        const hashedPassword = await (0, bcrypt_1.hash)(user.password, saltRounds);
        await this.prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hashedPassword
            }
        });
    }
    async listAllUsers() {
        const allUsers = await this.prisma.user.findMany();
        return allUsers;
    }
}
exports.MysqlUserRepository = MysqlUserRepository;
