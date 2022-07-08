import "reflect-metadata"
import { DataSource } from "typeorm"
import { Department } from "./entity/Department"
import { Role } from "./entity/Role"
import { User } from "./entity/User"
import { UserDepartment } from "./entity/UserDepartment"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "username",
    password: "password",
    database: "docker-nest-postgres",
    synchronize: true,
    logging: false,
    entities: [User, Department, UserDepartment, Role],
    migrations: [],
    subscribers: [],
})
