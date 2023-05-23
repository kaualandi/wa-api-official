import { Injectable } from '@nestjs/common';
import { ReceiveMessageDto } from './dto/receive-message.dto';

@Injectable()
export class ReceiveMessageService {
  receive(receiveMessageDto: ReceiveMessageDto) {
    console.log('receiveMessageDto', receiveMessageDto);

    receiveMessageDto?.entry.forEach((entry) => {
      entry.changes.forEach((messagingItem) => {
        console.log('messagingItem', messagingItem);

        console.log('\n\nmessagingItem.contacts', messagingItem.contacts);
        messagingItem.contacts?.forEach((contact) => {
          console.log('contact', contact);
        });
        console.log('\n\nmessagingItem.messages', messagingItem.messages);
        messagingItem.messages?.forEach((message) => {
          console.log('message', message);
        });
      });
    });

    return { status: true };
  }
}
