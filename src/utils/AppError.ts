class AppError{
    message;
    statusCode;

    constructor(message: string, statusCode: number = 400){
        this.message = message;
        this.statusCode = statusCode;
    }
}

export {
    AppError
}