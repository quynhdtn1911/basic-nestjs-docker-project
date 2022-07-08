import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { UserDepartment } from "./UserDepartment"

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: true
    })
    name: string
}
