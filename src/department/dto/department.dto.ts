import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Department } from 'types/department-enum';

export class DepartmentDto {
  @IsNotEmpty()
  @IsString()
  @IsEnum(Department, {
    message: `Invalid department. Plase select: IT, HHRR, ADMIN, SUPPORT`,
  })
  name: Department;
}
