if(process.env.NODE_ENV !== "test") require("dotenv").config();

import express, { Response, json} from 'express';

import "express-async-errors";
import "reflect-metadata";

import { routes } from '@shared/infra/http/routes';
import { errorHandler } from '@shared/infra/http/middlewares/errorHandler';

function server(){
    const server = express();

    server.use(json());
    server.use(process.env.API_PREFIX || "v1", routes);
    server.use(errorHandler);

    server.get('/status', (_, res: Response) => {
        return res.status(200).json({
            message: "O servidor está saudável 😎"
        })
    })

    server.set("port", process.env.PORT || 3333);

    return server;
}

export default server()