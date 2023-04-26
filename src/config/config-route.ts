import express = require('express');

import {Application, Router} from "express";


export abstract class ConfigRoute {
    private _app: express.Application;
    private _name: string;

    constructor(app: express.Application, name: string) {
        this._app = app;
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get app(): Application {
        return this._app;
    }

    abstract getCommonRoutes(): Router;


}