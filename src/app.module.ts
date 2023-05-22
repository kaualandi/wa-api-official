import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendMessageModule } from './models/send-message/send-message.module';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [SendMessageModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
