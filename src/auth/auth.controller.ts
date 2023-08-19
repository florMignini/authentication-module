import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';


@Controller('auth')
export class AuthController {
  //dependency injection
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('logIn')
  logIn(@Body() loginDto: LoginDto) {
    return this.authService.logIn();
  }
}
