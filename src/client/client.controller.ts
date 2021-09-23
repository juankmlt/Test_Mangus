
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto } from './dto/client.dto';

@Controller('client')
export class ClientController {
    constructor(private readonly clientservice: ClientService) {}

    @Get()
    async getAll() {
        return this.clientservice.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return this.clientservice.getAll();
    }

    @Post()
    async create(@Body() dto: ClientDto) {
        return await this.clientservice.create(dto);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: ClientDto){
        return await this.clientservice.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.clientservice.delete(id)
    }
}
