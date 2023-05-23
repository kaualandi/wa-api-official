import { Injectable } from '@nestjs/common';
import { ReceiveMessageDto } from './dto/receive-message.dto';

@Injectable()
export class ReceiveMessageService {
  receive(receiveMessageDto: ReceiveMessageDto) {
    console.log('receiveMessageDto', receiveMessageDto);

    receiveMessageDto?.entry.forEach((entry) => {
      entry.changes.forEach((messagingItem) => {
        console.log('messagingItem', messagingItem);
      });
    });

    return { status: true };
  }
}
