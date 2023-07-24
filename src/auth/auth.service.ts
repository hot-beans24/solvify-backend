import { Injectable, UnauthorizedException } from '@nestjs/common'
import { User } from '@prisma/client'
import * as bcypt from 'bcrypt'

import { UserService } from 'src/user/user.service'
import { LoginDataDto, SignupDataDto } from './auth.dto'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(data: LoginDataDto): Promise<User> {
    const user = await this.userService.findByEmail(data.email)
    if (!(await bcypt.compare(data.password, user.password))) {
      throw new UnauthorizedException('パスワードが違います')
    }
    return user
  }

  async signup(data: SignupDataDto): Promise<User> {
    await this.userService.createUser(data)
    return this.login(data)
  }
}
