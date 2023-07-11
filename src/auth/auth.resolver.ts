import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RegisterInput } from './dto/inputs/register.input';
import { AuthResponse } from './types/auth-response.type';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  //REGISTER_EMPLOYEE
  @Mutation(() => AuthResponse, { name: 'register' })
  async register(
    @Args('registerInput') registerInput: RegisterInput,
  ): Promise<AuthResponse> {
    return this.authService.register(registerInput);
  }
  //LOGIN_EMPLOYEE
  // @Mutation(,{name: 'login'})
  //   async login(): Promise</*  */>{
  //     // return this.authService.login()
  //   }

  //   //REFRESH TOKEN
  // @Query(/*  */, {name: 'refresh_token'})
  // async refreshToken(){
  //   // return this.authService.refreshToken()
  // }
}
