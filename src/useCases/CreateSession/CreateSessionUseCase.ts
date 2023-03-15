import { ICreateSessionRequestDTO } from "./CreateSessionDTO";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import authconfig from "../../configs/auth";

export class CreateSessionUseCase{
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository;
    }

    async execute(data: ICreateSessionRequestDTO){
        const user = await this.userRepository.findByEmail(data.email);

        if(!user){
            throw new Error('Email e/ou senha incorretos');
        }

        const passwordMatched = await compare(data.password, user.password);

        if(!passwordMatched){
            throw new Error('Email e/ou senha incorretos');
        }

        const {secret, expiresIn} = authconfig.jwt;

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn
        });

        return {
            user,
            token
        }
    }

}