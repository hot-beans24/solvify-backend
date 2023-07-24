import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { User } from '@prisma/client'

import { AuthService } from './auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' })
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.authService.login({ email, password })
    if (!user) {
      throw new UnauthorizedException('ユーザーが見つかりません')
    }
    return user
  }
}
