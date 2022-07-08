"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDepartment = void 0;
var typeorm_1 = require("typeorm");
var Department_1 = require("./Department");
var Role_1 = require("./Role");
var User_1 = require("./User");
var UserDepartment = /** @class */ (function () {
    function UserDepartment() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)('int'),
        (0, typeorm_1.ManyToOne)(function (type) { return User_1.User; }, function (user) { return user.userDepartments; }),
        (0, typeorm_1.JoinColumn)({
            name: 'user',
            referencedColumnName: 'id'
        }),
        __metadata("design:type", User_1.User)
    ], UserDepartment.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)('int'),
        (0, typeorm_1.ManyToOne)(function (type) { return Department_1.Department; }, function (department) { return department.userDepartments; }),
        (0, typeorm_1.JoinColumn)({
            name: 'department',
            referencedColumnName: 'id'
        }),
        __metadata("design:type", Department_1.Department)
    ], UserDepartment.prototype, "department", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Role_1.Role; }),
        __metadata("design:type", Role_1.Role)
    ], UserDepartment.prototype, "role", void 0);
    UserDepartment = __decorate([
        (0, typeorm_1.Entity)()
    ], UserDepartment);
    return UserDepartment;
}());
exports.UserDepartment = UserDepartment;
//# sourceMappingURL=UserDepartment.js.map