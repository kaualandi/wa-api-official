import { Injectable } from '@nestjs/common';
import { ReceiveMessageDto } from './dto/receive-message.dto';
import fs from 'fs';

@Injectable()
export class ReceiveMessageService {
  receive(receiveMessageDto: ReceiveMessageDto) {
    console.log('receiveMessageDto', receiveMessageDto);

    receiveMessageDto?.entry.forEach((entry) => {
      entry.changes.forEach((messagingItem) => {
        console.log('messagingItem', messagingItem);

        fs.writeFileSync(
          `./${messagingItem.metadata.phone_number_id}.json`,
          JSON.stringify(messagingItem, null, 2),
        );

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
