import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from '../entity/User';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    private userService: UsersService
    constructor(userService: UsersService){
        this.userService = userService
    }

    @Get('/')
    async getListUser(){
        let users = await this.userService.getListUsers()
        return users
    }

    @Get(':id')
    async getUser(@Param('id') id){
        let user = await this.userService.getUser(id)
        return user
    }

    @Post()
    async createUser(@Body() user: User){
        let newUser = await this.userService.createUser(user)
        return newUser
    }

    @Put()
    async updateUser(@Body() user: User){
        let newUser = await this.userService.updateUser(user)
        return newUser
    }

    @Delete(':id')
    async deleteUser(@Param('id') id){
        let result = await this.userService.deleteUser(id)
    }
}

