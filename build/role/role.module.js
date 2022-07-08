"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
var common_1 = require("@nestjs/common");
var role_controller_1 = require("./role.controller");
var role_service_1 = require("./role.service");
var RoleModule = /** @class */ (function () {
    function RoleModule() {
    }
    RoleModule = __decorate([
        (0, common_1.Module)({
            controllers: [role_controller_1.RoleController],
            providers: [role_service_1.RoleService]
        })
    ], RoleModule);
    return RoleModule;
}());
exports.RoleModule = RoleModule;
//# sourceMappingURL=role.module.js.map