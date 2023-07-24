import { IsString, IsNotEmpty } from 'class-validator'

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty({
    message: 'タイトルを入力してください'
  })
  title: string

  @IsString()
  @IsNotEmpty({
    message: '質問内容を入力してください'
  })
  content: string
}
