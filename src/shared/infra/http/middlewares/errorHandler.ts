import { Request, Response, NextFunction } from "express";
import { AppError } from "@errors/AppError";

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction){
    if(err instanceof AppError){
        return res.json(err.statusCode).json({
            status: "erro",
            message: err.message
        })
    }

    console.error(err);

    return res.status(500).json({
        status: "erro",
        message: `Erro interno do servidor - ${err.message}`
    })
}

export { errorHandler };