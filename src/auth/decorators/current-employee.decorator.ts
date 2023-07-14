import {
  ExecutionContext,
  InternalServerErrorException,
  createParamDecorator,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentEmployee = createParamDecorator(
  (department = [], context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const employee = ctx.getContext().req.user;
    if (!employee) {
      throw new InternalServerErrorException(`No employee available`);
    }
    return employee;
  },
);
