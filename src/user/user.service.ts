import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'

import { SignupDataDto } from 'src/auth/auth.dto'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: User['id']): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })
    if (!user) {
      throw new UnauthorizedException('ユーザーが見つかりません')
    }
    return user
  }

  async findByEmail(email: User['email']): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email }
    })
    if (!user) {
      throw new UnauthorizedException('ユーザーが見つかりません')
    }
    return user
  }

  async createUser(data: SignupDataDto): Promise<User> {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(data.password, salt)
    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword
      }
    })
  }

  async deleteUser(id: User['id']): Promise<User> {
    return this.prisma.user.delete({
      where: { id }
    })
  }
}
