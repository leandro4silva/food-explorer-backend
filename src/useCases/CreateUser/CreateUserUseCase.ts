import { IMailProvider } from "../../providers/IMailProviders";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { AppError } from "../../utils/AppErrpr";

export class CreateUserUseCase {
    private userRepository: IUserRepository;
    private mailProvider: IMailProvider;

    constructor(userRepository: IUserRepository, mailProvider: IMailProvider) {
        this.userRepository = userRepository;
        this.mailProvider = mailProvider;
    }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new AppError('Esse email já está cadastrado.', 'email');
        }

        const user = new User(data);

        await this.userRepository.save(user);
    }

}