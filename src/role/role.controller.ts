import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Role } from '../entity/Role';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    private roleService: RoleService
    constructor(roleService: RoleService){
        this.roleService = roleService
    }


    @Get('/')
    async getListUser(){
        let users = await this.roleService.getListRole()
        return users
    }

    @Get(':id')
    async getRole(@Param('id') id){
        let user = await this.roleService.getRole(id)
        return user
    }

    @Post()
    async createRole(@Body() role: Role){
        let newRole = await this.roleService.createRole(role)
        return newRole
    }

    @Put()
    async updateRole(@Body() role: Role){
        let newRole = await this.roleService.updateRole(role)
        return newRole
    }

    @Delete(':id')
    async deleteRole(@Param('id') id){
        let result = await this.roleService.deleteRole(id)
    }
}
