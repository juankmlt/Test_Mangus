
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { ClientEntity } from './client.entity';
import { ClientRepository } from './client.repository';
import { ClientDto } from './dto/client.dto';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientEntity) private clientRepository: ClientRepository
    ){ }

    async getAll(): Promise<ClientEntity[]> {
        const list = await this.clientRepository.find();
        if(list.length < 0) {
            throw new NotFoundException({message: 'the list is empty'});
        }
        return list;
    }

    async findbyid(id: number): Promise<ClientEntity> {
        const client = await this.clientRepository.findOne(id);
        if(!client) {
            throw new NotFoundException({message: 'Not found'});
        }
        return client;
    }

    async create(dto: ClientDto): Promise<any> {
        const client = this.clientRepository.create(dto);
        await this.clientRepository.save(client);
        return {message: 'New client added!'};
    }

    async update(id:number ,dto:ClientDto): Promise<any> {
        const client = await this.findbyid(id);
        dto.name? client.name = dto.name : client.name = client.name;
        dto.lastname? client.lastname = dto.lastname : client.lastname = client.lastname;
        dto.address? client.address = dto.address : client.address = client.address;
        dto.phone? client.phone = dto.phone : client.phone = client.phone;
        await this.clientRepository.save(client);
        return {message: 'Client updated!'};
    }

    async delete(id: number): Promise<any>{
        const client = await this.findbyid(id);
        await this.clientRepository.delete(client);
        return {message: 'Client deleted!'};
    }
}
