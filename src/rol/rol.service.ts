
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { rolDto } from './dto/rol.dto';
import { RolEntity } from './rol.entity';
import { RolRepository } from './rol.repository';

@Injectable()
export class RolService {
    constructor(
        @InjectRepository(RolEntity) private rolRepository: RolRepository
    ){ }

    async getAll(): Promise<RolEntity[]> {
        const list = await this.rolRepository.find();
        if(list.length < 0) {
            throw new NotFoundException({message: 'the list is empty'});
        }
        return list;
    }

    async findbyid(id: number): Promise<RolEntity> {
        const rol = await this.rolRepository.findOne(id);
        if(!rol) {
            throw new NotFoundException({message: 'Not found'});
        }
        return rol;
    }

    async create(dto: rolDto): Promise<any> {
        const rol = this.rolRepository.create(dto);
        await this.rolRepository.save(rol);
        return {message: 'New Rol added!'};
    }

    async update(id:number ,dto:rolDto): Promise<any> {
        const rol = await this.findbyid(id);
        dto.description? rol.description = dto.description : rol.description = rol.description;
        await this.rolRepository.save(rol);
        return {message: 'Rol Updated!'};
    }

    async delete(id: number): Promise<any>{
        const rol = await this.findbyid(id);
        await this.rolRepository.delete(rol);
        return {message: 'Rol deleted!'};
    }
}
