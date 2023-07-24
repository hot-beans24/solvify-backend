import { Controller, Post, Request, Body, UseGuards } from '@nestjs/common'
import { AuthenticatedGuard } from 'src/auth/authenticated.guard'
import { QuestionService } from './question.service'
import { CreateQuestionDto } from './question.dto'

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @UseGuards(AuthenticatedGuard)
  @Post('create')
  create(@Request() req: any, @Body() data: CreateQuestionDto) {
    return this.questionService.createQuestion(data, req.user.id)
  }
}
