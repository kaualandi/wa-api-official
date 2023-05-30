import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { UsersService } from 'src/modules/receive-message/users.service';
import { ReceiveMessageController } from './receive-message.controller';
import { ReceiveMessageService } from './receive-message.service';

@Module({
  controllers: [ReceiveMessageController],
  imports: [PrismaModule],
  providers: [ReceiveMessageService, UsersService],
})
export class ReceiveMessageModule {}
