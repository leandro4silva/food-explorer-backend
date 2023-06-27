"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSessionUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../../configs/auth"));
class CreateSessionUseCase {
    constructor(userRepository, adminRepository) {
        this.userRepository = userRepository;
        this.adminRepository = adminRepository;
    }
    async execute(data) {
        if (!data.isAdmin) {
            const user = await this.userRepository.findByEmail(data.email);
            if (!user) {
                throw new Error('Email e/ou senha incorretos');
            }
            const passwordMatched = await (0, bcrypt_1.compare)(data.password, user.password);
            if (!passwordMatched) {
                throw new Error('Email e/ou senha incorretos');
            }
            const { secret, expiresIn } = auth_1.default.jwt;
            const token = (0, jsonwebtoken_1.sign)({}, secret, {
                subject: user.id,
                expiresIn
            });
            return {
                user,
                token
            };
        }
        else {
            const admin = await this.adminRepository.findByEmail(data.email);
            if (!admin) {
                throw new Error('Email e/ou senha incorretos');
            }
            const passwordMatched = await (0, bcrypt_1.compare)(data.password, admin.password);
            if (!passwordMatched) {
                throw new Error('Email e/ou senha incorretos');
            }
            const { secret, expiresIn } = auth_1.default.jwt;
            const token = (0, jsonwebtoken_1.sign)({}, secret, {
                subject: admin.id,
                expiresIn
            });
            return {
                admin,
                token
            };
        }
    }
}
exports.CreateSessionUseCase = CreateSessionUseCase;
