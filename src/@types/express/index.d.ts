declare namespace Express{
    interface Request{
        user: {
            user_id: string;
        },
        file: {
            filename: string
        }
    }
}