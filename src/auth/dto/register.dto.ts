import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator"

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    firstname:   string
    @IsString()
    @IsNotEmpty()
    lastname:    string
    @IsEmail()
    @IsNotEmpty()
    email:       string
    @IsString()
    @IsNotEmpty()
    password:        string
    @IsString()
    @IsNotEmpty()
    position:    string
    @IsInt()
    @IsNotEmpty()
    departmentId:  number
    @IsString()
    @IsNotEmpty()
    dateOfBirth: string
    @IsString()
    @IsNotEmpty()
    nacionality: string
    @IsString()
    @IsNotEmpty()
    city:        string
}