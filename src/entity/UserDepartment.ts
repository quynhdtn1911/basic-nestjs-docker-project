import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Department } from "./Department"
import { Role } from "./Role"
import { User } from "./User"

@Entity()
export class UserDepartment {

    @PrimaryColumn('int')
    @ManyToOne(type => User, user => user.userDepartments)
    @JoinColumn({
        name: 'user',
        referencedColumnName: 'id'
    })
    user: User

    @PrimaryColumn('int')
    @ManyToOne(type => Department, department => department.userDepartments) 
    @JoinColumn({
        name: 'department',
        referencedColumnName: 'id'
    })
    department: Department

    @ManyToOne(type => Role)
    role: Role
}
