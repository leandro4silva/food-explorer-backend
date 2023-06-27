"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlAdminRepository = void 0;
const client_1 = require("@prisma/client");
class MysqlAdminRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async findByEmail(email) {
        const admin = await this.prisma.admin.findFirst({
            where: {
                email
            }
        });
        return admin;
    }
}
exports.MysqlAdminRepository = MysqlAdminRepository;
