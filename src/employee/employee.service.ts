import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDto } from './dto/employee.dto';
import { EmployeeEntity } from './employee.entity';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(EmployeeEntity) private employeeRepository: EmployeeRepository
    ){ }

    async getAll(): Promise<EmployeeEntity[]> {
        const list = await this.employeeRepository.find();
        if(list.length < 0) {
            throw new NotFoundException({message: 'the list is empty'});
        }
        return list;
    }

    async findbyid(id: number): Promise<EmployeeEntity> {
        const employee = await this.employeeRepository.findOne(id);
        if(!employee) {
            throw new NotFoundException({message: 'Not found'});
        }
        return employee;
    }

    async create(dto: EmployeeDto): Promise<any> {
        const employee = this.employeeRepository.create(dto);
        await this.employeeRepository.save(employee);
        return {message: 'New employee added!'};
    }

    async update(id:number ,dto:EmployeeDto): Promise<any> {
        const employee = await this.findbyid(id);
        dto.name? employee.name = employee.name : employee.name = employee.name;
        dto.lastname? employee.lastname = employee.lastname : employee.lastname = employee.lastname;
        dto.address? employee.address = employee.address : employee.address = employee.address;
        dto.phone? employee.phone = employee.phone : employee.phone = employee.phone;
        await this.employeeRepository.save(employee);
        return {message: 'Employee updated!'};
    }

    async delete(id: number): Promise<any>{
        const employee = await this.findbyid(id);
        await this.employeeRepository.delete(employee);
        return {message: 'Employee deleted!'};
    }
}
