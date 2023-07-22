import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authSetvice: AuthService) {}

  @Post('register')
  register() {
    return `register a user`;
  }

  @Post('login')
  login() {
    return `login a user`;
  }
}
