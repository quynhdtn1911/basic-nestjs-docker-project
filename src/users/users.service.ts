import { Get, Injectable } from '@nestjs/common';
import { User } from '../entity/User';
import AppDataSource from '../index';

@Injectable()
export class UsersService {
    repository = AppDataSource.getRepository(User)

    getListUsers(): Promise<any> {
        let users = this.repository.find({
            relations: ['userDepartments.department', 'userDepartments.role']
        })
        return new Promise(resolve => {
            resolve(users)
        })
    }

    getUser(id): Promise<any>{
        let user = this.repository.find({
            where: {
                id: Number(id)
            }, 
            relations: ['userDepartments.department', 'userDepartments.role']
        })
        return new Promise(resolve => {
            resolve(user[0])
        })
    }

    async createUser(user: User): Promise<any>{
        let newUser = await this.repository.save(user)
        return new Promise(resolve => {
            resolve("New user'id is " + newUser.id)
        })
    }

    async updateUser(user: User): Promise<any>{
        let newUser = await this.repository.save(user)
        return new Promise(resolve => {
            resolve(newUser)
        })
    }

    async deleteUser(id): Promise<any>{
        await this.repository.delete(id)
        return new Promise(resolve => {
            resolve('Delete user success!')
        })
    }
}
