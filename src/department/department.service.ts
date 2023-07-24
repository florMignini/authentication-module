import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DepartmentDto } from './dto/department.dto';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  async createDepartment(departmentDto: DepartmentDto) {
    this.prisma.department.create({
      data: {
        name: departmentDto.name,
      },
    });
  }
}
