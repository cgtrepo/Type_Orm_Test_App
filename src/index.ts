import express = require("express");
import { DTS } from "./config/data-source";
import bodyParser = require("body-parser");
import { UserController } from "./controllers/user.controller";

const app = express();

DTS.initialize().then(() => {
        console.log("Data Source has been initialized!")
}).catch((err) => {
        console.error("Error during Data Source initialization:", err)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let usersController = new UserController(app, "users routes")

console.log(usersController.getCommonRoutes())

app.use("/api/users", usersController.getCommonRoutes())


export const App = app