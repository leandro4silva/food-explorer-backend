"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlFavoritesRepository = void 0;
const client_1 = require("@prisma/client");
class MysqlFavoritesRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async listAllFavorites(userId) {
        const dishs = await this.prisma.favorites.findMany({
            select: {
                dish: {
                    select: {
                        id: true,
                        image: true,
                        name: true
                    }
                }
            },
            where: {
                userId
            },
            orderBy: {
                dishId: "asc"
            }
        });
        const favoritesDishs = dishs.map((item) => {
            return item.dish;
        });
        return favoritesDishs;
    }
    async save(userId, dishId) {
        await this.prisma.favorites.create({
            data: {
                dishId,
                userId
            }
        });
    }
    async remove(userId, dishId) {
        await this.prisma.favorites.delete({
            where: {
                userId_dishId: {
                    dishId,
                    userId
                }
            }
        });
    }
    async showFavorite(dishId, userId) {
        const dishs = await this.prisma.favorites.findFirst({
            select: {
                dish: {
                    select: {
                        id: true,
                        image: true,
                        name: true
                    }
                }
            },
            where: {
                dishId,
                userId
            }
        });
        if (dishs) {
            return dishs.dish;
        }
        return null;
    }
}
exports.MysqlFavoritesRepository = MysqlFavoritesRepository;
