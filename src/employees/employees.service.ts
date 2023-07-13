import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';
import { RegisterInput } from 'src/auth/dto/inputs/register.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
  ) {}

  async create(registerInput: RegisterInput): Promise<Employee> {
    try {
      const newEmployee = this.employeesRepository.create(registerInput);
      return await this.employeesRepository.save(newEmployee);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
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
