interface Entry {
  id: string;
  time?: number;
  changes: any[];
}

export class ReceiveMessageDto {
  object: string;
  entry: Entry[];
}
