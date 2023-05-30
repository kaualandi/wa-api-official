import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceiveMessageModule } from './models/receive-message/receive-message.module';
import { SendMessageModule } from './models/send-message/send-message.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Global()
@Module({
  imports: [
    PrismaModule,
    SendMessageModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ReceiveMessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
