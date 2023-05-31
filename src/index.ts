import express = require("express");
import { DTS } from "./config/data-source";
import bodyParser = require("body-parser");
import { UserController } from "./controllers/user.controller";
import testController from "./controllers/test.controller";
import cors from 'cors'

const app = express();




app.use(cors({
        allowedHeaders: "*",
        origin: 'http://localhost:7000',
}));

DTS.initialize().then(() => {
        console.log("Data Source has been initialized!")
}).catch((err) => {
        console.error("Error during Data Source initialization:", err)
})

app.use(bodyParser.json({ limit: '500mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));

let usersController = new UserController(app, "users routes")

console.log(usersController.getCommonRoutes())

app.use("/api/users", usersController.getCommonRoutes())

app.use('/api/test', testController)


export const App = app