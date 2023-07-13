import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterInput, LoginInput } from './dto/inputs';
import { AuthResponse } from './types/auth-response.type';
import { EmployeesService } from 'src/employees/employees.service';

@Injectable()
export class AuthService {
  constructor(private readonly employeeService: EmployeesService) {}
  async register(registerInput: RegisterInput): Promise<AuthResponse> {
    // employee creation
    const employee = await this.employeeService.create(registerInput);
    //create accessToken
    const accessToken = 'my4cc3ssTok3n';
    return { accessToken, employee };
  }

  async login(loginInput: LoginInput): Promise<AuthResponse> {
    const { username, password } = loginInput;
    const accessToken = 'my4cc3ssTok3n';
    // checking if username exist in DB
    const employee = await this.employeeService.findOneByUsername(username);
    //checking if both passwords are the same
    if (!bcrypt.compareSync(password, employee.password)) {
      throw new BadRequestException(`Wrong credentials`);
    }
    return {
      accessToken,
      employee,
    };
  }
}
