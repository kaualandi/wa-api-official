import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ReceiveMessageDto } from './dto/receive-message.dto';
import { ReceiveMessageService } from './receive-message.service';

@Controller('receive-message')
export class ReceiveMessageController {
  constructor(private readonly receiveMessageService: ReceiveMessageService) {}

  @Post()
  receive(@Body() receiveMessageDto: ReceiveMessageDto) {
    return this.receiveMessageService.receive(receiveMessageDto);
  }

  @Get()
  testToken(@Query('hub.challenge') challenge: string) {
    console.log('challenge', challenge);
    return challenge;
  }
}
