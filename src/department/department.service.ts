// roles.service.ts
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { CreateDepartmentInput } from './dto/create-department.input';

@Injectable()
export class DepartmentService {
  private logger = new Logger('EmployeesService');
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}
  /* create a department 
  @PRIVATE ADMIN ONLY
  */
  async create(
    createDepartmentInput: CreateDepartmentInput,
  ): Promise<Department> {
    try {
      const newDepartment = this.departmentRepository.create(
        createDepartmentInput,
      );
      return await this.departmentRepository.save(newDepartment);
    } catch (error) {
      throw new NotFoundException(`Not implemented yet`);
    }
  }

  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find();
  }
}
