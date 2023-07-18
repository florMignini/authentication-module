import {
  ExecutionContext,
  ForbiddenException,
  InternalServerErrorException,
  createParamDecorator,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ValidDepartment } from '../enums/valid-department.enum';

export const CurrentEmployee = createParamDecorator(
  (department: ValidDepartment[] = [], context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const employee = ctx.getContext().req.user;

    if (!employee) {
      throw new InternalServerErrorException(`No employee available`);
    }

    //if there is no department exception
    department.length === 0 ? employee : null;
    //if there is a department exception
    for (const role of employee.department) {
      if (department.includes(role as ValidDepartment)) {
        return employee;
      }
    }
    throw new ForbiddenException(`Employee ${employee.username}not allowed`);
  },
);
