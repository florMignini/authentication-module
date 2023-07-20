import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { ValidDepartment } from 'src/auth/enums/valid-department.enum';

@InputType()
export class CreateDepartmentInput {
  @IsNotEmpty()
  @Field(() => [ValidDepartment])
  departmentName: [ValidDepartment];
}
