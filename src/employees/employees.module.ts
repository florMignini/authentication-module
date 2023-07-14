import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee, EmployeeImage, EmployeeDepartment } from './entities';

@Module({
  providers: [EmployeesResolver, EmployeesService],
  imports: [
    TypeOrmModule.forFeature([Employee, EmployeeImage, EmployeeDepartment]),
  ],
  exports: [EmployeesService],
})
export class EmployeesModule {}
