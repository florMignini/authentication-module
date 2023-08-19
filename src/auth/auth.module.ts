import { Module } from '@nestjs/common';
import { AuthService, AuthController } from './';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
