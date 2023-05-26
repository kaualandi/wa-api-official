import { Injectable } from '@nestjs/common';
import { ReceiveMessageDto } from './dto/receive-message.dto';

@Injectable()
export class ReceiveMessageService {
  receive(receiveMessageDto: ReceiveMessageDto) {
    receiveMessageDto?.entry.forEach((entry) => {
      entry.changes.forEach((messagingItem) => {
        messagingItem?.value.messages?.forEach((message) => {
          console.log('\n\nmessage', message);

          if (message.type === 'contacts') {
            message.contacts.forEach((contact) => {
              console.log('\n\ncontact', contact);
            });
          }
        });
      });
    });

    return { status: true };
  }
}
