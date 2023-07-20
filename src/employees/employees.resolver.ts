import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';

import { UpdateEmployeeInput } from '../department/dto/update-employee.input';
import { ValidDepartmentArgs } from '../department/dto/args/department.arg';
import { CurrentEmployee } from 'src/auth/decorators/current-employee.decorator';
import { ValidDepartment } from 'src/auth/enums/valid-department.enum';
import { ParseUUIDPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => Employee)
@UseGuards(JwtAuthGuard)
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) {}

  @Query(() => [Employee], { name: 'searchEmployees' })
  findAll(
    @Args() validDepartment: ValidDepartmentArgs,
    @CurrentEmployee([ValidDepartment.admin, ValidDepartment.hhrr])
    employee: Employee,
  ): Promise<Employee[]> {
    return this.employeesService.findAll();
  }
  /* @ONLY ADMIN ALLOWED */
  @Query(() => [Employee], { name: 'searchEmployeesByDepartment' })
  findAllByDepartment(
    @Args() validDepartment: ValidDepartmentArgs,
    @CurrentEmployee([ValidDepartment.admin])
    employee: Employee,
  ): Promise<Employee[]> {
    return this.employeesService.findAllByDepartment(
      validDepartment.department,
    );
  }
  /* @ONLY ADMIN & HHRR ALLOWED */
  @Query(() => Employee, { name: 'searchEmployeeById' })
  findOneById(
    @Args('id', { type: () => ID }, ParseUUIDPipe) id: string,
    @CurrentEmployee([ValidDepartment.admin, ValidDepartment.hhrr])
    employee: Employee,
  ): Promise<Employee> {
    try {
      return this.employeesService.findOneById(id);
    } catch (error) {
      throw new Error(`Not implemented yet`);
    }
  }
  /* @ONLY ADMIN & HHRR ALLOWED */
  @Query(() => Employee, { name: 'searchEmployeeUsername' })
  findOneByUsername(
    @Args('username', { type: () => String }) username: string,
    @CurrentEmployee([ValidDepartment.admin, ValidDepartment.hhrr])
    employee: Employee,
  ): Promise<Employee> {
    try {
      return this.employeesService.findOneByUsername(username);
    } catch (error) {
      throw new Error(`employee ${username} not found`);
    }
  }

  /* @Mutation(() => Employee)
  updateEmployee(
    @Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput,
  ) {
    return this.employeesService.update(
      updateEmployeeInput.id,
      updateEmployeeInput,
    );
  } */

  /* @ONLY ADMIN & HHRR ALLOWED */
  @Mutation(() => Employee)
  removeEmployee(
    @Args('id', { type: () => ID }, ParseUUIDPipe) id: string,
    @CurrentEmployee([ValidDepartment.admin])
    employee: Employee,
  ) {
    return this.employeesService.unavailable(id, employee);
  }
}
