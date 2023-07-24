import { Injectable } from '@nestjs/common'
import { Question, User } from '@prisma/client'
import { PrismaService } from 'src/prisma.service'
import { CreateQuestionDto } from './question.dto'

@Injectable()
export class QuestionService {
  constructor(private readonly prisma: PrismaService) {}

  async createQuestion(data: CreateQuestionDto, userId: User['id']): Promise<Question> {
    return this.prisma.question.create({
      data: {
        ...data,
        userId
      }
    })
  }
}
