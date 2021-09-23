
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'users'})
export class UserEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    username:string;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    password:string;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    rol_id:number;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    created_at:string;
}