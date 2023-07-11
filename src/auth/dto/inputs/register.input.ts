import { Field, InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

@InputType()
export class RegisterInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  firstName: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  lastName: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  birthDate: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  identityNumber: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  username: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  @MinLength(6)
  password: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  phoneNumber: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  gender: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  bloodType: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  country: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  city: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  state: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  zipCode: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  address: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  hireDate: string;
  @IsString()
  @Field(() => String)
  position: string;
  @IsBoolean()
  @Field(() => Boolean)
  available: boolean;
}
