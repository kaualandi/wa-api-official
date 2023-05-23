interface MessageDataMetadata {
  display_phone_number: string;
  phone_number_id: string;
}

interface MessageData {
  messaging_product: 'whatsapp';
  metadata: MessageDataMetadata;

  contacts: any[];
  messages: any[];
}

interface Entry {
  id: string;
  time?: number;
  changes: MessageData[];
}

export class ReceiveMessageDto {
  object: string;
  entry: Entry[];
}
