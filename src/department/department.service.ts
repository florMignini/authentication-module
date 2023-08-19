import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/createDepartment.dto';

@Injectable()
export class DepartmentService {
    constructor(private prisma: PrismaService){}

    async createDepartment(@Body()  createDepartmentDto:CreateDepartmentDto){
         //save employee in DB
         const newDepartment = await this.prisma.department.create({
            data:createDepartmentDto
         })
        return newDepartment;
    }
}
