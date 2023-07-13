import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterInput, LoginInput } from './dto/inputs';
import { AuthResponse } from './types/auth-response.type';
import { EmployeesService } from 'src/employees/employees.service';
import { Employee } from 'src/employees/entities/employee.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly employeeService: EmployeesService,
    private readonly jwtService: JwtService,
  ) {}
  async register(registerInput: RegisterInput): Promise<AuthResponse> {
    // employee creation
    const employee = await this.employeeService.create(registerInput);
    //create accessToken
    const accessToken = this.getToken(employee.id);
    return { accessToken, employee };
  }

  async login(loginInput: LoginInput): Promise<AuthResponse> {
    const { username, password } = loginInput;
    // checking if username exist in DB
    const employee = await this.employeeService.findOneByUsername(username);
    //checking if both passwords are the same
    if (!bcrypt.compareSync(password, employee.password)) {
      throw new BadRequestException(`Wrong credentials`);
    }
    //create accessToken
    const accessToken = this.getToken(employee.id);
    return {
      accessToken,
      employee,
    };
  }
  //REVALIDATE EMPLOYEE TOKEN
  async employeeRevalidate(id: string): Promise<Employee> {
    const employee = await this.employeeService.findOneById(id);
    //if employee is not available handling response
    if (!employee.available) {
      throw new UnauthorizedException(`employee not available`);
    }
    //avoid send employee password
    delete employee.password;
    return employee;
  }

  // method for get JWT token
  private getToken(employeeId: string) {
    return this.jwtService.sign({ id: employeeId });
  }
}
