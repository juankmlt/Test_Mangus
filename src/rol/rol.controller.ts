
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { rolDto } from './dto/rol.dto';
import { RolService } from './rol.service';

@Controller('rol')
export class RolController {
    constructor(private readonly rolservice: RolService) {}

    @Get()
    async getAll() {
        return this.rolservice.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return this.rolservice.getAll();
    }

    @Post()
    async create(@Body() dto: rolDto) {
        return await this.rolservice.create(dto);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: rolDto){
        return await this.rolservice.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.rolservice.delete(id)
    }
}
