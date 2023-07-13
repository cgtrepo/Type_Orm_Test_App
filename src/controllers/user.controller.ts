import { Router } from 'express';
import express = require('express');
import { UserServiceImpl } from '../services/users/user.service.impl';
import { ControllerRoutePayload as SERVICE, ROUTER_POST_MODEL } from '../services/utils-class/router';
import { ConfigRoute } from '../config/config-route';

export class UserController extends ConfigRoute {
    route: express.Router = express.Router()

    private USER_SERVICE = new UserServiceImpl();

    private ROUTER_POST = ROUTER_POST_MODEL(this.route);
    private Routes = UsersController.Routes;

    constructor(app: express.Application, name: string) {
        super(app, name);
    }

    getCommonRoutes(): Router {

        this.ROUTER_POST(this.Routes.GET_ALL_USERS, new SERVICE(this.USER_SERVICE, (func) => func.getAllUserList));

        this.ROUTER_POST(this.Routes.CREATE_USER, new SERVICE(this.USER_SERVICE, (func) => func.createUser));

        this.ROUTER_POST(this.Routes.REMOOVE_USER, new SERVICE(this.USER_SERVICE, (func) => func.deleteUser));

        this.ROUTER_POST(this.Routes.FOR_TEST, new SERVICE(this.USER_SERVICE, (func) => func.funWithGeneric));

        this.ROUTER_POST(this.Routes.FOR_TEST, new SERVICE(this.USER_SERVICE, (func) => func.funWithGeneric));

        return this.route
    }

}


export namespace UsersController {
    export enum Routes {
        GET_ALL_USERS = "/get-all-users",
        ID = "/:id",
        CREATE_USER = "/create-user",
        FOR_TEST = "/for-test",
        POST_FILES = "/post-files",
        REMOOVE_USER = "/remoove-user"
    }
}

// const userController = express.Router()

// userController.get('/get-all-users', async (_req: Request, _res: Response) => {
//     const users = await DTS.getRepository(User).find()
//     console.log(users)
//     _res.json(users)
// })

// userController.get('/:id', async (_req: Request, _res: Response) => {
//     const results = await DTS.getRepository(User).findOneBy({
//         id: Number.parseInt(_req.params.id),
//     })
//     return _res.send(results)
// })

// userController.post('/create-user', async (_req: Request, _res: Response) => {
//     const user = await DTS.getRepository(User).create(_req.body)
//     const results = await DTS.getRepository(User).save(user)
//     return _res.send(results)
// })

// userController.put('/:id', async (_req: Request, _res: Response) => {
//     const user = await DTS.getRepository(User).findOneBy({
//         id: Number.parseInt(_req.params.id),
//     })
//     DTS.getRepository(User).merge(user, _req.body)
//     const results = await DTS.getRepository(User).save(user)
//     return _res.send(results)
// })

// userController.delete('/:id', async (_req: Request, _res: Response) => {
//     const results = await DTS.getRepository(User).delete(_req.params.id)
//     return _res.send(results)
// })