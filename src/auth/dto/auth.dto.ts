import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Gender } from 'types/gender-enum.type';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(6, {
    message: `Password must have at least $constraint1 characters`,
  })
  password: string;
  @IsString()
  @MinLength(8, {
    message: `Username must have at least $constraint1 characters`,
  })
  username: string;
  @IsString()
  @IsEnum(Gender, {
    message: `Invalid gender. Plase select: male, female, other`,
  })
  gender: Gender;
  @IsString()
  @IsNotEmpty()
  birth_date: string;
  @IsString()
  @IsNotEmpty()
  identity_number: string;
  @IsString()
  @IsNotEmpty()
  avatar: string;
  @IsString()
  @IsNotEmpty()
  phone_number: string;
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsString()
  @IsNotEmpty()
  state: string;
  @IsString()
  @IsNotEmpty()
  country: string;
  @IsString()
  @IsNotEmpty()
  zip_code: string;
  @IsString()
  @IsNotEmpty()
  hire_date: string;
  @IsString()
  @IsNotEmpty()
  position: string;
  @IsBoolean()
  is_available: boolean;
  // department:
}
