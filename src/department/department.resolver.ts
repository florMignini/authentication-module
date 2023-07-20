// roles.resolver.ts
import { Query, Resolver } from '@nestjs/graphql';
import { DepartmentService } from './department.service';
import { Department } from './entities/department.entity';

@Resolver('Role')
export class DepartmentResolver {
  constructor(private departmentService: DepartmentService) {}

  @Query(() => [Department])
  async departments(): Promise<Department[]> {
    return this.departmentService.findAll();
  }
}
