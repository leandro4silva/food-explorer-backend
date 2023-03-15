import { ICreateSessionRequestDTO } from "./CreateSessionDTO";
import { IUserRepository } from "../../repositories/IUsersRepository";

export class CreateSessionUseCase{
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository;
    }

    async execute(data: ICreateSessionRequestDTO){
        const user = await this.userRepository.findByEmail(data.email);
    }

}