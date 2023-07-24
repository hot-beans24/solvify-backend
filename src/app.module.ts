import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthController } from './auth/auth.controller'
import { AuthService } from './auth/auth.service'
import { UserController } from './user/user.controller'
import { UserService } from './user/user.service'
import { PrismaService } from './prisma.service'
@Module({
  imports: [],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, AuthService, UserService, PrismaService]
})
export class AppModule {}
