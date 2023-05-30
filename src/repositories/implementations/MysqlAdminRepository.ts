import { PrismaClient } from "@prisma/client";
import { Admin } from "../../entities/Admin";
import { IAdminRepository } from "../IAdminRepository";


export class MysqlAdminRepository implements IAdminRepository{
    private prisma = new PrismaClient();

    async findByEmail(email: string): Promise<Admin | null> {
        const admin = await this.prisma.admin.findFirst({
            where: {
                email
            }
        });

        return admin;
    }
}