import { Body, Controller, Header, Post } from '@nestjs/common';
import { SendMessageDto } from './dto/send-message.dto';
import { SendMessageService } from './send-message.service';

@Controller('send-message')
export class SendMessageController {
  constructor(private readonly sendMessageService: SendMessageService) {}

  @Post()
  @Header('Cache-Control', 'none')
  send(@Body() sendMessageDto: SendMessageDto) {
    return this.sendMessageService.send(sendMessageDto);
  }
}
