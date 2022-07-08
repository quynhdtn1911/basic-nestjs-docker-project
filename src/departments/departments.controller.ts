import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Department } from '../entity/Department';
import { DepartmentsService } from './departments.service';

@Controller('departments')
export class DepartmentsController {
    private departmentService: DepartmentsService
    constructor(departmentService: DepartmentsService){
        this.departmentService = departmentService
    }
    @Get('/')
    async getListDepartment(){
        let departments = await this.departmentService.getListDepartments()
        return departments
    }

    @Get(':id')
    async getDepartment(@Param('id') id){
        let department = await this.departmentService.getDepartment(id)
        return department
    }

    @Post()
    async createUser(@Body() department: Department){
        let newUser = await this.departmentService.createDepartment(department)
        return newUser
    }

    @Put()
    async updateUser(@Body() department: Department){
        let newUser = await this.departmentService.updateDepartment(department)
        return newUser
    }

    @Delete(':id')
    async deleteUser(@Param('id') id){
        let result = await this.departmentService.deleteDepartment(id)
        return result
    }
}
