import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator'

export class LoginDataDto {
  @IsEmail(undefined, {
    message: 'メールアドレスの形式で入力してください'
  })
  email: string

  @IsNotEmpty({
    message: 'パスワードを入力してください'
  })
  password: string
}

export class SignupDataDto {
  @IsNotEmpty({
    message: 'ユーザーネームを入力してください'
  })
  username: string

  @IsEmail(undefined, {
    message: 'メールアドレスの形式で入力してください'
  })
  email: string

  @IsNotEmpty()
  password: string
}
