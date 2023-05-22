import { Module } from '@nestjs/common';
import { ReceiveMessageService } from './receive-message.service';
import { ReceiveMessageController } from './receive-message.controller';

@Module({
  controllers: [ReceiveMessageController],
  providers: [ReceiveMessageService],
})
export class ReceiveMessageModule {}
