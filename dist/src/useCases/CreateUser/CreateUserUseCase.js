"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../entities/User");
const AppErrpr_1 = require("../../utils/AppErrpr");
class CreateUserUseCase {
    constructor(userRepository, mailProvider) {
        this.userRepository = userRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new AppErrpr_1.AppError('Esse email já está cadastrado.', 'email');
        }
        const user = new User_1.User(data);
        await this.userRepository.save(user);
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
