import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  exports: [UserService],
  providers: [UserService, PrismaService],
  controllers: [UserController]
})
export class UserModule {}
