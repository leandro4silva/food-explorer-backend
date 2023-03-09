import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProviders";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase{
    private userRepository: IUserRepository;
    private mailProvider: IMailProvider;

    constructor(userRepository: IUserRepository, mailProvider: IMailProvider){
        this.userRepository = userRepository;
        this.mailProvider = mailProvider;
    }

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if(userAlreadyExists){
            throw new Error('User already existes.')
        }

        const user = new User(data);

        await this.userRepository.save(user);

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe do Meu App',
                email: 'equipe@meuapp.com',
            },
            subject: 'Seja bem-vindo a plataforma',
            body: '<p>Você já pode fazer ogin em nossa plataforma</p>'            
        })
    }

}