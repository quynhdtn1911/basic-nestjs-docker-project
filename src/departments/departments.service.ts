import { Injectable } from '@nestjs/common';
import { Department } from '../entity/Department';
import AppDataSource from '../index';

@Injectable()
export class DepartmentsService {
    repository = AppDataSource.getRepository(Department)

    getListDepartments(): Promise<any> {
        let departments = this.repository.find({
            relations: [
                'userDepartments', 'userDepartments.user', 'userDepartments.role'
            ]
        })
        return new Promise(resolve => {
            resolve(departments)
        })
    }

    getDepartment(id): Promise<any>{
        let department = this.repository.find({
            where: {
                id: Number(id)
            }, 
            relations: [
                'userDepartments', 'userDepartments.user', 'userDepartments.role'
            ]
        })
        return new Promise(resolve => {
            resolve(department[0])
        })
    }

    async createDepartment(department: Department): Promise<any>{
        let newUser = await this.repository.save(department)
        return new Promise(resolve => {
            resolve("New department'id is " + newUser.id)
        })
    }

    async updateDepartment(department: Department): Promise<any>{
        let newDepartment = await this.repository.save(department)
        return new Promise(resolve => {
            resolve(newDepartment)
        })
    }

    async deleteDepartment(id): Promise<any>{
        await this.repository.delete(id)
        return new Promise(resolve => {
            resolve('Delete department success!')
        })
    }
}
