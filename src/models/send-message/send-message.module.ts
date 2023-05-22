import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleware } from 'src/common/middleware/models/logger/logger.middleware';
import { SendMessageController } from './send-message.controller';
import { SendMessageService } from './send-message.service';

@Module({
  controllers: [SendMessageController],
  imports: [HttpModule],
  providers: [SendMessageService],
})
export class SendMessageModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(SendMessageController);
  }
}
