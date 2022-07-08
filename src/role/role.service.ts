import { Injectable } from '@nestjs/common';
import { Role } from '../entity/Role';
import AppDataSource from '../index';

@Injectable()
export class RoleService {
    repository = AppDataSource.getRepository(Role)

    getListRole(): Promise<any> {
        let roles = this.repository.find()
        return new Promise(resolve => {
            resolve(roles)
        })
    }

    getRole(id): Promise<any>{
        let role = this.repository.find({
            where: {
                id: Number(id)
            }
        })
        return new Promise(resolve => {
            resolve(role[0])
        })
    }

    async createRole(role: Role): Promise<any>{
        let newRole = await this.repository.save(role)
        return new Promise(resolve => {
            resolve("New user'id is " + newRole.id)
        })
    }

    async updateRole(role: Role): Promise<any>{
        let newRole = await this.repository.save(role)
        return new Promise(resolve => {
            resolve(newRole)
        })
    }

    async deleteRole(id): Promise<any>{
        await this.repository.delete(id)
        return new Promise(resolve => {
            resolve('Delete role success!')
        })
    }
}
