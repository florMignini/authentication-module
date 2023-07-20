import { ArgsType, Field, registerEnumType } from '@nestjs/graphql';
import { IsArray } from 'class-validator';
import { ValidDepartment } from 'src/auth/enums/valid-department.enum';
@ArgsType()
export class ValidDepartmentArgs {
  @Field(() => [ValidDepartment])
  @IsArray()
  department: ValidDepartment[] = [];
}
registerEnumType(ValidDepartment, {
  name: 'ValidDepartment',
  description: 'Allowed employee authorization roles',
});
