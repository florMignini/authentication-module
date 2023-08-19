import { Module } from '@nestjs/common';
import { AuthService, AuthController } from './';

@Module({
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
