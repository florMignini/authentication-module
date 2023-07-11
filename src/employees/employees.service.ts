import { Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  create(createEmployeeInput: CreateEmployeeInput) {
    return 'This action adds a new employee';
  }

  async findAll(): Promise<Employee[]> {
    return [];
  }

  findOne(id: string): Promise<Employee> {
    throw new Error(`This action returns a #${id} employee`);
  }

  update(id: number, updateEmployeeInput: UpdateEmployeeInput) {
    return `This action updates a #${id} employee`;
  }

  unavailable(id: string) {
    throw new Error(`This action make unavailable a #${id} employee`);
  }
}
