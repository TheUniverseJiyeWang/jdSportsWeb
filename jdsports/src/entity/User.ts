import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import "reflect-metadata";


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    userId!: number;

    @Column('text',{nullable:false})
    userName!: string;

}