
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'roles'})
export class RolEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    description:string;
}