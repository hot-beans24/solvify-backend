import {} from 'class-validator'

export class LoginDataDto {
  email: string
  password: string
}

export class SignupDataDto {
  email: string
  password: string
  username: string
}
