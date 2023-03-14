import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MysqlUserRepository } from "../../repositories/implementations/MysqlUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const mysqlUserRepository = new MysqlUserRepository();

const createUserUseCase = new CreateUserUseCase(mysqlUserRepository, mailtrapMailProvider);

const createUserController = new CreateUserController(createUserUseCase);

export{
    createUserUseCase,
    createUserController
}