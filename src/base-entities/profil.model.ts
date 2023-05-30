import { Entity, OneToOne } from "typeorm"
import { User } from "./user.model"
import { Media } from "./media.model"

@Entity()
export class Profil extends Media {
    @OneToOne(() => User, user => user.profile, { onDelete: 'CASCADE' })
    user: User
}