"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError {
    constructor(message, type, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
        this.type = type;
    }
}
exports.AppError = AppError;
