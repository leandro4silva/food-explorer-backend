import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { MysqlAdminRepository } from "../../repositories/implementations/MysqlAdminRepository";
import { CreateSessionUseCase } from "./CreateSessionUseCase";
import { CreateSessionController } from "./CreateSessionController";

const mysqlUserRepository = new MysqlUserRepository();
const mysqlAdminRepository = new MysqlAdminRepository();
const createSessionUseCase = new CreateSessionUseCase(mysqlUserRepository, mysqlAdminRepository);
const createSessionController = new CreateSessionController(createSessionUseCase);

export{
    createSessionController,
    createSessionUseCase
}