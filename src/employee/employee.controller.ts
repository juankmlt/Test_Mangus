
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { EmployeeDto } from './dto/employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {

    constructor(private readonly emploeservice: EmployeeService) {}

    @Get()
    async getAll() {
        return this.emploeservice.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return this.emploeservice.getAll();
    }

    @Post()
    async create(@Body() dto: EmployeeDto) {
        return await this.emploeservice.create(dto);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: EmployeeDto){
        return await this.emploeservice.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return await this.emploeservice.delete(id)
    }
}
