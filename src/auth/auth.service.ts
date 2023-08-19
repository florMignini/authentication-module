import { Body, Injectable } from "@nestjs/common";
import { RegisterDto } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2'

@Injectable({})
export class AuthService {
   constructor(private prisma: PrismaService){}
        async register (@Body() registerDto: RegisterDto) {
            //hash the password
            const passwordHashed = await argon.hash(registerDto.password)
            //save employee in DB
            const newEmployee = await this.prisma.employee.create({
                data:{
                    ...registerDto,
                password: passwordHashed
                }
            })
            const { password, ...rest} = newEmployee;
            return rest
          }
    

    logIn(){
        return `anda logIn`
    }
}