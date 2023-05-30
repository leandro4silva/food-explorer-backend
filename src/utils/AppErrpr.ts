class AppError{
    message;
    statusCode;
    type;

    constructor(message: string, type: string, statusCode: number = 400){
        this.message = message;
        this.statusCode = statusCode;
        this.type = type
    }
}

export {
    AppError
}