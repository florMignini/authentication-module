import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { EmployeeImage } from './entities/employeeImage.entity';

@Module({
  providers: [EmployeesResolver, EmployeesService],
  imports: [TypeOrmModule.forFeature([Employee, EmployeeImage])],
  exports: [EmployeesService],
})
export class EmployeesModule {}
