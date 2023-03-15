import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { CreateSessionUseCase } from "./CreateSessionUseCase";
import { CreateSessionController } from "./CreateSessionController";

const mysqlUserRepository = new MysqlUserRepository();
const createSessionUseCase = new CreateSessionUseCase(mysqlUserRepository);
const createSessionController = new CreateSessionController(createSessionUseCase);

export{
    createSessionController,
    createSessionUseCase
}