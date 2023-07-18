import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';

import { UpdateEmployeeInput } from './dto/update-employee.input';
import { ValidDepartmentArgs } from './dto/args/department.arg';

@Resolver(() => Employee)
export class EmployeesResolver {
  constructor(private readonly employeesService: EmployeesService) {}

  @Query(() => [Employee], { name: 'employees' })
  findAll(@Args() validDepartment: ValidDepartmentArgs): Promise<Employee[]> {
    console.log(validDepartment);
    return this.employeesService.findAll(validDepartment.department);
  }

  @Query(() => Employee, { name: 'searchEmployeeById' })
  findOneById(@Args('id', { type: () => ID }) id: string): Promise<Employee> {
    try {
      return this.employeesService.findOneById(id);
    } catch (error) {
      throw new Error(`Not implemented yet`);
    }
  }
  @Query(() => Employee, { name: 'searchEmployeeUsername' })
  findOneByUsername(
    @Args('username', { type: () => String }) username: string,
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

  @Mutation(() => Employee)
  removeEmployee(@Args('id', { type: () => ID }) id: string) {
    return this.employeesService.unavailable(id);
  }
}
