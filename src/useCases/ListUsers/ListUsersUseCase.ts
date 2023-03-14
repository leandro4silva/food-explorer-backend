import { IUserRepository } from "../../repositories/IUsersRepository";

export class ListUsersUseCase{
    private userRepository:IUserRepository;

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository;
    }

    async execute(){
        return await this.userRepository.listAllUsers();
    }
}