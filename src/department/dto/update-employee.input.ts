import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateDepartmentInput } from './create-department.input';

@InputType()
export class UpdateEmployeeInput extends PartialType(CreateDepartmentInput) {
  @Field(() => Int)
  id: number;
}
