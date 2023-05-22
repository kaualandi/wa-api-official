import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendMessageModule } from './models/send-message/send-message.module';
import { ConfigModule } from '@nestjs/config';
import { ReceiveMessageModule } from './models/receive-message/receive-message.module';

@Global()
@Module({
  imports: [SendMessageModule, ConfigModule.forRoot({ isGlobal: true }), ReceiveMessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
