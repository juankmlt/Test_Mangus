import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";





@Entity({name: 'employees'})
export class EmployeeEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: 'integer', nullable: false, unique: true})
    user_id:number;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    name:string;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    lastname:string;

    @Column({type: 'varchar', length: 50, nullable: false, unique: true})
    address:string;

    @Column({type: 'integer', nullable: false, unique: true})
    phone:number;
}