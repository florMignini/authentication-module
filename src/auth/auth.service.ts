import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto';
import * as argon from 'argon2';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async register(registerDto: RegisterDto) {
    // employee creation
    // 1. hash and generate the password
    const hashed_password = await argon.hash(registerDto.password);
    // 2.save the new employee in DB
    const { password, ...rest } = registerDto;
    const new_employee = await this.prisma.employee.create({
      data: { ...rest, password: hashed_password },
    });
    // 3. return the new employee
    return new_employee;
  }
}
