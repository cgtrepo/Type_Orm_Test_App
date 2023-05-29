import { MediaType } from "express";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DestinationType } from "./enum/DestinationType";
import { MediaType,  } from "./enum/MediaType";



@Entity()
export class Media {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    link: string;
    @Column()
    originalName: string;
    @Column()
    description?: string;
    @Column({
        type: "enum",
        enum: MediaType,
    })
    mediaType: MediaType;
    @Column({
        type: "enum",
        enum: DestinationType,
    })
    destination: DestinationType
    @Column()
    previousLink: string
    @Column({ nullable: true })
    previousId: number

    thumbnailUrl: string
}