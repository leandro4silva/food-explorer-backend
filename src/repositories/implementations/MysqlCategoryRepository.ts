import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../ICategoryRepository";
import { PrismaClient } from "@prisma/client"

export class MysqlCategoryRepository implements ICategoryRepository{
    private prisma = new PrismaClient();

    async listAllCategory(): Promise<Category[] | null> {
        return await this.prisma.category.findMany({
            orderBy: {
                id: "asc"
            }
        });
    }
}