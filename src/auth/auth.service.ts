import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import * as bcypt from 'bcrypt'

import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'
import { LoginDataDto, SignupDataDto } from './auth.dto'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private userService: UserService) {}

  async login(data: LoginDataDto): Promise<User | { message: string }> {
    const user = this.userService.findUser(data.email)
    if (!user) {
      return { message: 'User not found' }
    } else {
      return user
    }
  }

  async signup(data: SignupDataDto): Promise<User> {
    return this.userService.createUser(data)
  }
}
