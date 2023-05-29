import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm"
import { User } from "./user.model"

@Entity()
export class Profil {
    @OneToOne(() => User, user => user.profile, { onDelete: 'CASCADE' })
    user: User
}