import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: UserRepository
    ){ }

    async getAll(): Promise<UserEntity[]> {
        const list = await this.userRepository.find();
        if(list.length < 0) {
            throw new NotFoundException({message: 'the list is empty'});
        }
        return list;
    }

    async findbyid(id: number): Promise<UserEntity> {
        const user = await this.userRepository.findOne(id);
        if(!user) {
            throw new NotFoundException({message: 'Not found'});
        }
        return user;
    }

    async create(dto: UserDto): Promise<any> {
        const user = this.userRepository.create(dto);
        await this.userRepository.save(user);
        return {message: 'New user added!'};
    }

    async update(id:number ,dto:UserDto): Promise<any> {
        const user = await this.findbyid(id);
        dto.username? user.username = dto.username : user.username = user.username;
        dto.password? user.password = dto.password : user.password = user.password;
        dto.rol_id? user.rol_id = dto.rol_id : user.rol_id = user.rol_id;
        dto.created_at? user.created_at = dto.created_at : user.created_at = user.created_at;
        await this.userRepository.save(user);
        return {message: 'user updated!'};
    }

    async delete(id: number): Promise<any>{
        const user = await this.findbyid(id);
        await this.userRepository.delete(user);
        return {message: 'User deleted!'};
    }
}
