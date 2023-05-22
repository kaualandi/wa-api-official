import { Injectable } from '@nestjs/common';
import { ReceiveMessageDto } from './dto/receive-message.dto';

@Injectable()
export class ReceiveMessageService {
  receive(receiveMessageDto: ReceiveMessageDto) {
    console.log(receiveMessageDto);
  }
}
