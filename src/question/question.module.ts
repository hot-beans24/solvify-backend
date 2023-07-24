import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { QuestionController } from './question.controller'
import { QuestionService } from './question.service'

@Module({
  providers: [QuestionService, PrismaService],
  controllers: [QuestionController]
})
export class QuestionModule {}
