
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userservice: UserService) {}

    @Get()
    async getAll() {
        return this.userservice.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return this.userservice.getAll();
    }

    @Post()
    async create(@Body() dto: UserDto) {
        return await this.userservice.create(dto);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UserDto){
        return await this.userservice.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.userservice.delete(id);
    }
}
