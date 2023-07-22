import { Injectable } from '@nestjs/common';
@Injectable()
export class AuthService {
  async register() {
    // employee creation
    return { msg: `employee creation` };
  }

  async login() {
    // employee creation
    return { msg: `employee intiation session` };
  }
}
