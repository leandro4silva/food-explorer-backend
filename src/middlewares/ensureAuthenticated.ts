import { verify } from "jsonwebtoken";
import authConfig from "../configs/auth";
import { AppError } from "../utils/AppErrpr";
import {Request, Response, NextFunction} from 'express';

function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError('JWT não informado', 'auth', 401);
    }

    const [, token] = authHeader.split(' ');

    try{
        const {sub: user_id} = verify(token, authConfig.jwt.secret);

        request.user = {
            user_id: String(user_id)
        }

        return next();
    }catch{
        throw new AppError('JWT Token invalido', 'auth', 401);
    }
}


export {
    ensureAuthenticated
}