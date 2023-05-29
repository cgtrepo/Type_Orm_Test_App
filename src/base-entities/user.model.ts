import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm"
import { Profil } from "./profil.model";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({unique: true})
    mail: string;

    @Column()
    pseudo: string;

    @Column()
    password: string;

    @OneToOne(() => Profil, profil => profil.user, { onDelete: 'CASCADE' })
    profile: Profil
}