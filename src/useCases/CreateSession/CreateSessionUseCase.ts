import { ICreateSessionRequestDTO } from "./CreateSessionDTO";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import authconfig from "../../configs/auth";
import { IAdminRepository } from "../../repositories/IAdminRepository";


export class CreateSessionUseCase{
    private userRepository: IUserRepository;
    private adminRepository: IAdminRepository;

    constructor(userRepository: IUserRepository, adminRepository: IAdminRepository){
        this.userRepository = userRepository;
        this.adminRepository = adminRepository;        
    }

    async execute(data: ICreateSessionRequestDTO){       
        if(!data.isAdmin){
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
        }else{
            const admin = await this.adminRepository.findByEmail(data.email)

            if(!admin){
                throw new Error('Email e/ou senha incorretos');
            }
    
            const passwordMatched = await compare(data.password, admin.password);
    
            if(!passwordMatched){
                throw new Error('Email e/ou senha incorretos');
            }
    
            const {secret, expiresIn} = authconfig.jwt;
    
            const token = sign({}, secret, {
                subject: admin.id,
                expiresIn
            });
    
            return {
                admin,
                token
            }
        }   
    }

}