import { EntryMessage } from '../receive-message.interface';

export class ReceiveMessageDto {
  object: string;
  entry: EntryMessage[];
}
