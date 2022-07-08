import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm"
import {Department} from './Department'
import { UserDepartment } from "./UserDepartment"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: true
    })
    firstName: string

    @Column({
        nullable: true
    })
    lastName: string

    @Column({
        nullable: true
    })
    dob: number

    @Column({
        nullable: true
    })
    description: string

    @OneToMany(type => UserDepartment, userDepartment => userDepartment.user)
    userDepartments: UserDepartment[]

}
