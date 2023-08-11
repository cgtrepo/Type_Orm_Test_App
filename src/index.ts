import express = require("express");
import { DTS } from "./config/data-source";
import bodyParser = require("body-parser");
import { UserController } from "./controllers/user.controller";
import testController from "./controllers/test.controller";
import cors from 'cors'
import { FileStorageController } from "./controllers/file.storage.controller";

const app = express();




app.use(cors({
        allowedHeaders: "*",
        origin: 'http://localhost:7000',
}));

DTS.initialize().then(async (base) => {
        console.log(base)
        if(base) {
                const queryResult = await DTS.query(
                        "SELECT * FROM information_schema.tables WHERE table_type = 'BASE TABLE' AND table_schema = 'explotel_base_'"
                );


                let allTableName: Array<string> = [];

                const tableNames = queryResult.map((row: any) => { allTableName.push(row.TABLE_NAME); row.TABLE_NAME == 'validation_request' });
                console.log(allTableName);
                console.log(allTableName.length);
                console.log("Data Source has been initialized!")
        }
}).catch((err) => {
        console.error("Error during Data Source initialization:", err)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

let usersController = new UserController(app, "users routes")
let filesStorageControler = new FileStorageController(app, "files routes")

app.use("/api/users", usersController.getCommonRoutes())

app.use("/api/files", filesStorageControler.getCommonRoutes())  

app.use('/api/test', testController)


export const App = app