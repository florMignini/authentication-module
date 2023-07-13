import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class LoginInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  username: string;
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  @MinLength(6)
  password: string;
}
