import { Injectable } from '@nestjs/common';
import { RegisterInput } from './dto/inputs/register.input';
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
}
