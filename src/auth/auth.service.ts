import { Injectable } from '@nestjs/common';
import { RegisterInput } from './dto/inputs/register.input';
import { AuthResponse } from './types/auth-response.type';

@Injectable()
export class AuthService {
  //   constructor() {}
  async register(registerInput: RegisterInput): Promise<AuthResponse> {
    console.log(registerInput);
    throw new Error(`not implemented yet`);
  }
}
