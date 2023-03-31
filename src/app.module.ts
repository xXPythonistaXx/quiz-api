import { Module } from '@nestjs/common';
import { QuizController } from '../quiz/quiz.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './transform.interceptor';

@Module({
  imports: [],
  controllers: [QuizController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
