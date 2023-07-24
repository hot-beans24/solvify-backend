import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common'
import { User } from '@prisma/client'

import { AuthService } from './auth.service'
import { SignupDataDto } from './auth.dto'
import { LocalAuthGuard } from './local-auth.guard'
import { AuthenticatedGuard } from './authenticated.guard'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: any): Promise<User> {
    return req.user
  }

  @Post('logout')
  logout(@Request() req: any) {
    req.session.destroy()
  }

  @Post('signup')
  signup(@Body() data: SignupDataDto): Promise<User> {
    return this.authService.signup(data)
  }

  @UseGuards(AuthenticatedGuard)
  @Get('me')
  me(@Request() req: any) {
    return req.user
  }
}
