import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { UserDepartment } from "./UserDepartment"

@Entity()
export class Department {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    address: string

    @OneToMany(type => UserDepartment, UserDepartment => UserDepartment.department)
    @JoinTable()
    userDepartments: UserDepartment[]

}
