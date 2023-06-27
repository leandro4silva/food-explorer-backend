"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlCategoryRepository = void 0;
const client_1 = require("@prisma/client");
class MysqlCategoryRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async listAllCategory() {
        return await this.prisma.category.findMany({
            orderBy: {
                id: "asc"
            }
        });
    }
}
exports.MysqlCategoryRepository = MysqlCategoryRepository;
