import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';
import { RegisterInput } from 'src/auth/dto/inputs/register.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeesService {
  private logger = new Logger('EmployeesService');
  constructor(
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
  ) {}

  async create(registerInput: RegisterInput): Promise<Employee> {
    try {
      const newEmployee = this.employeesRepository.create({
        ...registerInput,
        password: bcrypt.hashSync(registerInput.password, 10),
      });
      return await this.employeesRepository.save(newEmployee);
    } catch (error) {
      this.handleError(error);
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

  // handleError method
  private handleError(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException(``);
  }
}
