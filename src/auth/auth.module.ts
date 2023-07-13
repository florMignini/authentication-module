import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { EmployeesModule } from 'src/employees/employees.module';

@Module({
  providers: [AuthResolver, AuthService],
  imports: [EmployeesModule],
})
export class AuthModule {}
