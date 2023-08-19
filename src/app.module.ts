import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { PrismaModule } from './prisma/prisma.module';
import { DepartmentModule } from './department/department.module';


@Module({
  imports: [AuthModule, EmployeeModule, PrismaModule, DepartmentModule]
})
export class AppModule {}
