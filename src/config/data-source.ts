import { DataSource } from "typeorm"

export const DTS = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "",
    database: "test",
    entities: ["src/base-entities/**/*.ts"],
    logging: true,
    synchronize: true,
})