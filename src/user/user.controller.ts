import { Controller } from '@nestjs/common'
import { AuthService } from 'src/auth/auth.service'
import { UserService } from './user.service'

@Controller('user')
export class UserController {}
