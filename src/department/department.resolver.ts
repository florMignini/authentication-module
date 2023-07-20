// roles.resolver.ts
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { Department } from './entities/department.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateDepartmentInput } from './dto/create-department.input';

@Resolver(() => Department)
// @UseGuards(JwtAuthGuard)
export class DepartmentResolver {
  constructor(private departmentService: DepartmentService) {}
  //CREATE DEPARTMENT
  @Mutation(() => Department, { name: 'department' })
  async register(
    @Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput,
  ): Promise<Department> {
    return this.departmentService.create(createDepartmentInput);
  }
  @Query(() => [Department])
  async departments(): Promise<Department[]> {
    return this.departmentService.findAll();
  }
}
