import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { validate as isUUID } from 'uuid';
@Injectable()
export class EmployeesService {
  //error logger beautification
  private readonly logger = new Logger('EmployeesService');
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      //create a new employee db registration
      const employee = this.employeeRepository.create(createEmployeeDto);
      await this.employeeRepository.save(employee);
      return employee;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    return this.employeeRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(search: string) {
    let employee: Employee;
    if (isUUID(search)) {
      employee = await this.employeeRepository.findOneBy({ id: search });
    } else {
      const query = this.employeeRepository.createQueryBuilder();
      employee = await query
        .where(
          'INITCAP(firstName) =:firstName or INITCAP(lastName) =:lastName',
          {
            firstName: this.capitalizeName(search),
            lastName: this.capitalizeName(search),
          },
        )
        .getOne();
    }
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }

  //method for handle db errors
  private handleErrors(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    this.logger.error(error);
    throw new InternalServerErrorException(`Unexpected error occurred`);
  }

  //method for name capitalization
  private capitalizeName(name: string) {
    `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`;
  }
}
