import { Module } from '@nestjs/common';
import { EmployeeController, EmployeeService } from './';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
