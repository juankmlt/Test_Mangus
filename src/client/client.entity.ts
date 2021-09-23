
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'clients'})
export class ClientEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    name:string;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    lastname:string;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    address:string;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    phone:number;
}
