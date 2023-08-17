import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  //dependency injection
  constructor(private authService: AuthService) {}

  @Post('register')
  register(): string {
    return this.authService.register();
  }

  @Post('logIn')
  logIn(): string {
    return this.authService.logIn();
  }
}
