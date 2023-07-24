import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'

import { SignupDataDto } from 'src/auth/auth.dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUser(email: User['email']): Promise<User> {
    return this.prisma.user.findUnique({
      where: { email }
    })
  }

  async createUser(data: SignupDataDto): Promise<User> {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(data.password, salt)
    return await this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword
      }
    })
  }
}
