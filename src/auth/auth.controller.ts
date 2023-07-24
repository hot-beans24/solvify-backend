import { Controller, Post, Body } from '@nestjs/common'

import { AuthService } from './auth.service'
import { LoginDataDto, SignupDataDto } from './auth.dto'
import { User } from '@prisma/client'

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() data: LoginDataDto): Promise<User | { message: string }> {
    return this.authService.login(data)
  }

  @Post('logout')
  logout(): { message: string } {
    return { message: 'Logout' }
  }

  @Post('signup')
  signup(@Body() data: SignupDataDto): Promise<User> {
    return this.authService.signup(data)
  }
}
