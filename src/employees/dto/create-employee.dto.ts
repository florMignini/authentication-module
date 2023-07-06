import { IsIn, IsString, MinLength } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  @MinLength(8)
  identityNumber: string;
  @IsString()
  @MinLength(6)
  birthDate: string;
  @IsString()
  @MinLength(6)
  username: string;
  @IsString()
  @MinLength(6)
  password: string;
  @IsString()
  email: string;
  @IsIn(['male', 'female', 'no binary', 'other'])
  gender: string;
  @IsString()
  bloodType: string;
  @IsString()
  city: string;
  @IsString()
  state: string;
  @IsString()
  zipCode: string;
  @IsString()
  address: string;
  @IsString()
  employeeType: string;
  @IsString()
  @MinLength(6)
  hireDate: string;

  //employee image
  @IsString()
  image: string;
}
