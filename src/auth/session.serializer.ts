import { Injectable } from '@nestjs/common'
import { PassportSerializer } from '@nestjs/passport'
import { User } from '@prisma/client'

import { AuthService } from './auth.service'
import { UserService } from 'src/user/user.service'

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {
    super()
  }

  serializeUser(user: User, done: (err: Error, id: User['id']) => void) {
    done(null, user.id)
  }

  async deserializeUser(id: User['id'], done: (err: Error, user: User) => void) {
    const user = await this.userService.findById(id)
    done(null, user)
  }
}
