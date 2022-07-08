"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Department_1 = require("./entity/Department");
var Role_1 = require("./entity/Role");
var User_1 = require("./entity/User");
var UserDepartment_1 = require("./entity/UserDepartment");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "username",
    password: "password",
    database: "docker-nest-postgres",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Department_1.Department, UserDepartment_1.UserDepartment, Role_1.Role],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map