import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { Employee } from './entities/employee.entity';
import { RegisterInput, LoginInput } from 'src/auth/dto/inputs';
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

  async findOneByUsername(username: string): Promise<Employee> {
    try {
      return await this.employeesRepository.findOneByOrFail({ username });
    } catch (error) {
      throw new NotFoundException(`${username} not found`);
      // this.handleError(error);
    }
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
