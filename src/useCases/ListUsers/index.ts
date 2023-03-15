import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { ListUsersController } from "./LIstUsersController";

const mysqlUserRepository = new MysqlUserRepository();
const listUsersUseCase = new ListUsersUseCase(mysqlUserRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export {
    listUsersUseCase,
    listUsersController
}